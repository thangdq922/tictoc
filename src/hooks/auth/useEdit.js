import { userEdit } from "../../services/user/usersService"
import { useMutation } from "@tanstack/react-query";


function useEdit() {

    const loginMutation = useMutation({
        mutationFn: (data) => {
            return userEdit(data)
        },
        onSuccess: (data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload()
        },
       
    })

    return loginMutation
}

export default useEdit