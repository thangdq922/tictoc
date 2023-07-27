import { useNavigate } from "react-router-dom";
import { userRegister } from "../../services/user/usersService"
import config from "../../config/routes";
import { useMutation } from "@tanstack/react-query";


function useRegister() {

    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn:  (data) => {
            return userRegister(data)
        },
        onSuccess: (data) => {
            localStorage.setItem("user", JSON.stringify(data));
            navigate(config.home);
        },
        // onError: (error) => {
        //     console.log(error)

        // }
    })

    return registerMutation
}

export default useRegister