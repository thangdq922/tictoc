import { userLogin, userRegister } from "../../services/user/usersService"
import { useMutation } from "@tanstack/react-query";


function useRegister() {

    const registerMutation = useMutation({
        mutationFn: async (data) => {
            await userRegister(data)
            return userLogin(
                {
                    usernameOrEmail: data.userName,
                    password: data.password
                }
            ) 
        },
        onSuccess: (data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload()
        },

    })

    return registerMutation
}

export default useRegister