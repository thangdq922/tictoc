import { IoClose } from 'react-icons/io5'
import { RiEditLine } from 'react-icons/ri'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import CustomModal from '../../../../component/Modals/CustomModal'
import styles from './EditProfile.module.css'
import Image from '../../../../component/Image/Image'
import { getUser } from '../../../../hooks/auth/user.localstore'
import useEdit from '../../../../hooks/auth/useEdit'

function EditProfile({ open, close }) {

    const [filePreview, setFilePreview] = useState("");
    const [file, setFile] = useState("");
    const userCurrent = getUser()?.data

    const defaultValues = {
        username: userCurrent?.userName,
        name: userCurrent?.first_name,
        bio: userCurrent?.bio
    }
    const [countWord, setCountWord] = useState(defaultValues.bio?.length);
    const userEdit = useEdit()
    const {
        register,
        handleSubmit,
        formState: { isDirty }
    } = useForm({ defaultValues: defaultValues });

    const handleFile = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setFilePreview(src);
        setFile(e.target.files[0]);
    };

    const submitForm = (data) => {
        const fullData = { ...data, upload_file: file };
        const formData = new FormData();

        for (const key in fullData) {
            console.log(key, fullData[key])
            formData.append(key, fullData[key]);
        }
    }

    return (
        <CustomModal type='profile' isOpen={open}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.dialog}>
                        <form onSubmit={handleSubmit(submitForm)} >
                            <div className={styles.header} >
                                <h1 className={styles.H1Header}>Edit profile</h1>
                                <div className={styles['close-button']} onClick={close}
                                >
                                    <IoClose size={24} />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.itemContainer}>
                                    <div className={styles.label}>Profile photo</div>
                                    <label htmlFor='file' className={styles.editAvatar}>
                                        <div className={styles.divContainer} >
                                            <span className={styles.avatarContainer}    >
                                                <Image
                                                    alt=""
                                                    src={filePreview}
                                                    className={styles.img}
                                                />
                                            </span>
                                        </div>
                                        <div aria-label="Profile photo" role="button" className={styles.editIcon}>
                                            <RiEditLine />
                                            <input
                                                tabIndex="-1"
                                                id='file'
                                                type="file"
                                                crossOrigin="anonymous"
                                                accept=".jpg,.jpeg,.png,.tiff,.heic,.webp"
                                                className={styles.input}
                                                onChange={handleFile}
                                                name="upload_file"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <input type="hidden" defaultValue={userCurrent.id} {...register("id")} />
                                <div className={styles.itemContainer}>
                                    <div className={styles.label}>Username</div>
                                    <div className={styles.inputContainer}>
                                        <input
                                            placeholder="Username"
                                            className={styles.input}
                                            defaultValue={defaultValues.username}
                                            {...register("username")}
                                        />
                                        <p className={styles.link} >www.tiktok.com/@jakiedo922</p>
                                        <p className={styles.tip}>Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
                                    </div>
                                </div>

                                <div className={styles.itemContainer}>
                                    <div className={styles.label}>Name</div>
                                    <div className={styles.inputContainer}>
                                        <input
                                            placeholder="Name"
                                            className={styles.input}
                                            defaultValue={defaultValues.name}
                                            {...register("name")}
                                        />
                                        <p className={styles.tip}>Your userName can only be changed once every 7 days.</p>
                                    </div>
                                </div>

                                <div className={styles.itemContainer} style={{ borderBottom: 'none' }}>
                                    <div className={styles.label}>Bio</div>
                                    <div className={styles.inputContainer}>
                                        <textarea
                                            placeholder="Bio"
                                            defaultValue={defaultValues.bio}
                                            className={styles.input}
                                            style={{ height: 100, resize: 'none' }}
                                            {...register('bio', {
                                                onChange: (e) => { setCountWord(e.target.value.length) },
                                            })}
                                        >
                                        </textarea>
                                        <div className={styles.textCount}>
                                            <span>{countWord}/</span>80</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <button className={styles.cancel} type="reset"  >Cancel</button>
                                <button
                                    className={styles.save}
                                    disabled={userEdit.isLoading || !isDirty}
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </CustomModal>
    )
}

export default EditProfile