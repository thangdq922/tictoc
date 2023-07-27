import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc"
import { FaChevronDown, FaFacebook } from "react-icons/fa"
import { BsTwitter } from 'react-icons/bs';

import styles from './ModalAuth.module.css'
import CustomModal from '../../../component/Modals/CustomModal';
import { LoginIcon } from '../../../component/Icons';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'
import { HiOutlineChevronLeft } from 'react-icons/hi'


function ModalAuth({ open, close }) {
    const [modal, setModal] = useState(true)
    const [sliceModal, setSliceModal] = useState('')

    const handleSlice = (e) => {
        e.preventDefault()
        modal ? setSliceModal('login') : setSliceModal('register')
    }

    const handleClose = (e) => {
        setSliceModal('')
        setModal(true)
        close(e)
    }

    return (
        <>
            <CustomModal type='login' isOpen={open}>
                <div className={styles.wrapper}>
                    <div className={styles.loginContainer}>
                        {
                            sliceModal !== '' &&
                            <div className={styles.back} onClick={() => setSliceModal('')}>
                                <HiOutlineChevronLeft size={26} />
                            </div>
                        }
                        <div className={styles.divLoginContainer}>
                            {sliceModal === 'login' && <LoginModal />}
                            {sliceModal === 'register' && <RegisterModal />}
                            {sliceModal === '' &&
                                <div className={styles.divHomeContainer}>
                                    <h2 className={styles['login-title']}>{modal ? 'Log in to TikTok' : 'Sign up for TikTok'} </h2>
                                    <Link className={styles.loginLink} onClick={handleSlice}>
                                        <div role="link" className={styles.divBoxContainer}>
                                            <div className={styles.divIconContainer}>
                                                <LoginIcon />
                                            </div>
                                            <p>{modal ? 'Use phone / email / username' : 'Use phone or email'}</p>
                                        </div>
                                    </Link>
                                    <div className={styles.divBoxContainer}>
                                        <div className={styles.divIconContainer}>
                                            <FaFacebook color='rgb(0, 117, 250)' />
                                        </div>
                                        <p>Continue with Facebook</p>
                                    </div>

                                    <div className={styles.divBoxContainer}>
                                        <div className={styles.divIconContainer}>
                                            <FcGoogle />
                                        </div>
                                        <p>Continue with Google</p>
                                    </div>

                                    {modal ?
                                        <div className={styles.divBoxContainer}>
                                            <div className={styles.divIconContainer}>
                                                <BsTwitter color='rgb(29, 161, 242)' />
                                            </div>
                                            <p>Continue with Twitter</p>
                                        </div>
                                        : <FaChevronDown style={{ marginLeft: '47%', cursor: 'pointer' }} />
                                    }
                                </div>
                            }
                        </div>
                    </div>

                    <div className={styles['confirm-tip']}>
                        <p className={styles.Ptext}>
                            By continuing, you agree to TikTok’s &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/terms-of-use?lang=en">
                                Terms of Service &nbsp;
                            </a>
                            and confirm that you have read TikTok’s &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/privacy-policy?lang=en">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                    <div className={styles.footer}>
                        <div> {modal ? 'Don’t have an account?' : 'Already have an account?'}  </div>
                        <Link className={styles.ALink} onClick={() => { setSliceModal(''); setModal(!modal) }}>
                            <span >{modal ? 'Sign Up' : 'Log In'}</span>
                        </Link>
                    </div>
                </div>

                <div
                    className={styles['close-button']}
                    onClick={handleClose}
                >
                    <IoClose />
                </div>
            </CustomModal>
        </>

    )
}

export default ModalAuth