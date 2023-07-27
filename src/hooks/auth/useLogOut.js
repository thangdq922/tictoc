import { userlogout } from "../../services/user/usersService"
import { useMutation } from "@tanstack/react-query";

function useLogout() {

    const logOutMutation = useMutation({
        mutationFn: (data) => {
            return userlogout(data)
        },
        onSuccess: () => {
            window.location.reload();
        },

    })

    return logOutMutation
}

export default useLogout