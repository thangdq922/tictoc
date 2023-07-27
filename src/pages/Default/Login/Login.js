import React from "react";
import { useForm } from "react-hook-form";

import styles from "./Login.module.css";
import Error from "../../../component/Error";
import useLogin from "../../../hooks/auth/useLogIn";

function Login() {

    const { register, handleSubmit } = useForm();

    const logIn = useLogin()

    const submitForm = (data) => {
        logIn.mutate(data)
    };


    return (
        <form onSubmit={handleSubmit(submitForm)} className={styles['login-form']}>
            <div className={styles.materialContainer}>
                <div className={styles.box}>
                    <div className={styles.title}>LOGIN</div>
                    <div className={styles['input-wrapper']}>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            {...register("email")}
                            required
                        />
                    </div>

                    <div className={styles['input-wrapper']}>
                        <input
                            className={styles.input}
                            type="password"
                            name="pass"
                            id="pass"
                            placeholder="Password"
                            {...register("password")}
                        />
                    </div>

                    {!!logIn.error && <Error>Wrong email or password</Error>}

                </div>
                <button className={styles.button} type="submit" disabled={logIn.isLoading}>
                    <span>Login</span> <i className="fa fa-check"></i>
                </button>
            </div>
        </form>
    );
}

export default Login;
