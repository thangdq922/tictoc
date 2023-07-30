import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp, AiTwotoneEyeInvisible } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

import { ShowPass } from '../../../../component/Icons'
import Option from './Option/Option'
import styles from './RegisterModal.module.css'
import useRegister from '../../../../hooks/auth/useRegister';
import Error from '../../../../component/Error/Error'


function RegisterModal() {

    const defaultValues = {
        email: "",
        password: '',
        userName: '',
        day: 'Day',
        month: 'Month',
        year: 'Year',
    }

    const {
        register,
        handleSubmit,
        formState: { dirtyFields }
    } = useForm({ defaultValues: defaultValues });

    const [showDay, setShowDay] = useState(false)
    const [showMonth, setShowMonth] = useState(false)
    const [showYear, setShowYear] = useState(false)
    const [showPass, setShowPass] = useState(true)


    const signUp = useRegister()

    const submitForm = (data) => {
        const birthDay= `${data.year}-${data.month}-${data.day}`
        const { year, month, day, ...dataRest } = data;
        signUp.mutate({ ...dataRest, birthDay: birthDay })
        
    };

    const disable = signUp.isLoading || !(dirtyFields.email && dirtyFields.password)

    return (
        <>
            <h2 className={styles.title}>Sign Up</h2>

            <form onSubmit={handleSubmit(submitForm)}>
                <div className={styles.divTitle}>When’s your birthday?</div>
                <div className={styles.divAgeSelector}>
                    <div aria-label="Month" className={styles.selector} onClick={() => setShowMonth(!showMonth)}>
                        <div className={styles.selectLabel} >
                            &nbsp;
                            {showMonth ?
                                <AiFillCaretUp className={styles.icon} />
                                : <>
                                    {!dirtyFields.month && defaultValues.month}
                                    <AiFillCaretDown className={styles.icon} />
                                </>
                            }
                        </div>

                        <select className={styles.optionWrapper}  {...register("month")}>
                            <Option type='Month' />
                        </select>

                    </div>

                    <div aria-label="Day" id="Day" className={styles.selector} onClick={() => setShowDay(!showDay)}>
                        <div className={styles.selectLabel}>
                            &nbsp;
                            {showDay ?
                                <AiFillCaretUp className={styles.icon} />
                                : <>
                                    {!dirtyFields.day && defaultValues.day}
                                    <AiFillCaretDown className={styles.icon} />
                                </>
                            }
                        </div>
                        <select className={styles.optionWrapper} {...register("day")}>
                            <Option type='Day' />
                        </select>
                    </div>

                    <div aria-label="Year" id="Year" className={styles.selector} onClick={() => setShowYear(!showYear)}>
                        <div className={styles.selectLabel}>
                            &nbsp;
                            {showYear ?
                                <AiFillCaretUp className={styles.icon} />
                                : <>
                                    {!dirtyFields.year && defaultValues.year}
                                    <AiFillCaretDown className={styles.icon} />
                                </>
                            }
                        </div>
                        <select className={styles.optionWrapper} {...register("year")}>
                            <Option type='Year' />
                        </select>
                    </div>
                </div>

                <div type="default" className={styles.description}>Your birthday won't be shown publicly.</div>
                <div className={styles.divDescription}>
                    Email
                    <a href="/signup/phone-or-email/email" className={styles.ALink}>Sign up with phone</a>
                </div>

                {/* <input
                    value="email"
                    type="hidden"
                    name="type"
                    id="type"
                    {...register("type")}
                /> */}
                <div className={styles.divEmailContainer}>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className={styles.input}
                        />
                        <div className={styles.iconContainer}> </div>
                    </div>
                </div>

                <div className={styles.divUsernameContainer}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="Username"
                            {...register("userName")}
                            className={styles.input} />
                        <div className={styles.iconContainer}> </div>
                    </div>
                </div>

                <div className={styles.passwordContainer}>
                    <div className={styles.inputContainer}>
                        <input
                            type={showPass ? 'password' : 'text'}
                            placeholder="Password"
                            {...register("password")}
                            className={styles.input}
                        />
                        <div className={styles.iconContainer}>
                            <i role="button" className={styles.icon} onClick={() => setShowPass(!showPass)}>
                                {showPass ?
                                    <ShowPass />
                                    : <AiTwotoneEyeInvisible />
                                }
                            </i>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.divCodeInputContainer}>
                        <div className={styles.divInputContainer}>
                            <input
                                type="text"
                                placeholder="Enter 6-digit code"
                                title='Enter the 6-digit code'
                                className={styles.input}
                                pattern='^[0-9]{6}$'
                                maxLength='6'
                                {...register("code")}
                            />
                            <div className={styles.iconContainer}>
                            </div>
                        </div>
                        <button type="button" disabled={true} className={styles.ButtonSendCode}>Send code</button>
                    </div>
                </div>

                {signUp.error &&
                    <Error>
                        This account is already registered
                    </Error>
                }
                <button type="submit" disabled={disable} className={styles.submit}>Sign up</button>

            </form>
        </>
    )
}

export default RegisterModal