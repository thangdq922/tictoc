import { createContext, useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { getUser } from "../hooks/auth/user.localstore";

const StompContext = createContext();
var stompClient = null;

function StompClientProvider({ children }) {

    const [notifs, setNotifs] = useState([]);
    const [messages, setMessages] = useState([]);
    const userCurrent = getUser()?.data

    const onConnected = () => {
        stompClient.subscribe('/user/queue/notif', onNotifReceived);
        stompClient.subscribe('/user/queue/messages', onMessageReceived);
        stompClient.send('/app/notification', {}, userCurrent?.userName)
        stompClient.send('/app/messages', {}, userCurrent?.userName)
    }

    const onError = (err) => {
        console.log(err);
    }

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        messages.push(payloadData.content)
        setMessages(...messages)
    }

    const onNotifReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        setNotifs(payloadData)
    }

    useEffect(() => {
        if (stompClient) {
            return
        }
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect(
            { Authorization: `Bearer ${getUser()?.accessToken}` },
            onConnected,
            onError
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <StompContext.Provider value={{ notifs, messages, stompClient }}>
            {children}
        </StompContext.Provider>
    )
}

export { StompContext, StompClientProvider }