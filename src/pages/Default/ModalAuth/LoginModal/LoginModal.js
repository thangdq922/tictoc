import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { AiTwotoneEyeInvisible } from 'react-icons/ai';

import { ShowPass } from '../../../../component/Icons'
import styles from './LoginModal.module.css'
import useLogin from '../../../../hooks/auth/useLogIn';
import Error from '../../../../component/Error/Error';

function LoginModal() {
    const { register, handleSubmit, formState: { dirtyFields }
    } = useForm({ defaultValues: { email: "", password: '' } });

    const [showPass, setShowPass] = useState(true)

    const logIn = useLogin()

    const submitForm = (data) => {
        logIn.mutate(data)
    };


    return (
        <>
            <h2 className={styles.title}>Log in</h2>
            <div className={styles.description} >
                Email or username
                <a href="/login/phone-or-email/phone" className={styles.ALink}>Log in with phone</a>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={styles.inputContainer}>
                    <input
                        type="email"
                        placeholder="Email or username"
                        {...register("email")}
                        name="email"
                        className={styles.input}
                    />
                    <div className={styles.iconContainer}> </div>
                </div>

                <div className={styles.passwordContainer}>
                    <div className={styles.inputContainer}>
                        <input
                            type={showPass ? 'password' : 'text'}
                            name="password"
                            placeholder="Password"
                            {...register("password")}
                            className={styles.input}
                        />
                        <div className={styles.iconContainer}>
                            <i tabIndex="0" role="button" className={styles.icon} onClick={() => setShowPass(!showPass)}>
                                {showPass ?
                                    <ShowPass />
                                    : <AiTwotoneEyeInvisible />
                                }
                            </i>
                        </div>
                    </div>
                </div>
                {!!logIn.error && <Error>Wrong email or password</Error>}
                <button
                    type="submit"
                    className={styles.submit}
                    disabled={logIn.isLoading || !(dirtyFields.email && dirtyFields.password)}
                >
                    Log in
                </button>
            </form>
        </>
    )
}

export default LoginModal