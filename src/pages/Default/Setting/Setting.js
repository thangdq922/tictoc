import { useForm } from 'react-hook-form'

import config from '../../../config'
import { UserIcon } from '../../../component/Icons'
import { MenuItem } from '../../../layouts/Common/Sidebar/Menu'
import Menu from '../../../layouts/Common/Sidebar/Menu/Menu'
import styles from './Setting.module.css'
import { getUser } from '../../../hooks/auth/user.localstore'
import Button from '../../../component/Button/Button'
import useEdit from '../../../hooks/auth/useEdit'
import * as userService from '../../../services/user/usersService'

function Setting() {
    const userCurrent = getUser()?.data
    const userEdit = useEdit()
    const defaultValues = {
        userName: userCurrent?.phone,
        email: userCurrent?.email,
        birthDay: userCurrent?.birthDay
    }
    const {
        register,
        handleSubmit,
        formState: { isDirty }
    } = useForm({ defaultValues: defaultValues });

    const submitForm = (data) => {
        const formData = new FormData();
        formData.append('user',  new Blob([JSON.stringify(data)], {
            type: "application/json"
        }));
        userEdit.mutate(formData)
    }

    const deleteAccount = () => userService.deleteUser(userCurrent.id)

    return (
        <div className={styles.container}>
            <div className={styles.divContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.sidebar_scrollbar}>
                        <Menu>
                            <MenuItem to={config.setting} icon={<UserIcon />}>Account management</MenuItem>
                            {/* <MenuItem icon={<BiLock size={27} style={{ marginRight: 7 }} />}  >Privacy</MenuItem> */}
                        </Menu>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.title}>
                        Account management
                    </div>

                    <div style={{ marginBottom: 100 }}>
                        <hr className={styles.hr} />
                        <div className={styles.content} >
                            <div data-e2e="manage-account-item">
                                <div data-e2e="account-control-text" className={styles.subtitle}>
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>Account control</font>
                                    </font>
                                </div>
                                <div data-e2e="delete-account-option" className={styles.option}>
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>Delete Account</font>
                                    </font>
                                </div>
                                <button className={styles.deleteBtn} onClick={deleteAccount}>
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>Delete</font>
                                    </font>
                                </button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </div>

                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className={styles.content}>
                            <div className={styles.label}>
                                Phone
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    placeholder="888 888 8888"
                                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                                    maxLength="12"
                                    className={styles.input}
                                    defaultValue={defaultValues.phone}
                                    // {...register("Phone")}
                                />
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.label}>
                                Email
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    placeholder="Email"
                                    type='email'
                                    className={styles.input}
                                    defaultValue={defaultValues.email}
                                    {...register("email")}
                                />
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.label}>
                                BirthDay
                            </div>
                            <div className={styles.inputContainer} >
                                <input
                                    style={{ cursor: 'pointer' }}
                                    placeholder="BirthDay"
                                    type='date'
                                    className={styles.input}
                                    defaultValue={defaultValues.birthDay}
                                    {...register("birthDay")}
                                />
                            </div>
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.content} style={{ left: 560 }}>
                            <Button primary disabled={!isDirty}>
                                Save
                            </Button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Setting