import { userLogin } from "../../services/user/usersService"
import { useMutation } from "@tanstack/react-query";


function useLogin() {

    const loginMutation = useMutation({
        mutationFn: (data) => {
            return userLogin(data)
        },
        onSuccess: (data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload()
        },
       
    })

    return loginMutation
}

export default useLogin