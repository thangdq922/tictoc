import React from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";

import styles from "./Login.module.css";

// import config from "../../../config";
// import { userLogin } from "~/features/authentication/userAction";
import Error from "../../../component/Error";

function Login() {
    //   const { loading, user, error } = useSelector((state) => state.user);
    //   const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    //   const navigate = useNavigate();

    //   useEffect(() => {
    //     if (user) {
    //       navigate(config.routes.home);
    //     }
    //   }, [navigate, user]);

    const submitForm = (data) => {
        // dispatch(userLogin(data));
        console.log('cc')
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

                    {/* error */ true && <Error>Wrong email or password</Error>}

                </div>

                <div className={styles['button-login']}>
                    <button className={styles.button} type="submit" disabled=/* {loading} */ {false}>
                        <span>Login</span> <i className="fa fa-check"></i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Login;
