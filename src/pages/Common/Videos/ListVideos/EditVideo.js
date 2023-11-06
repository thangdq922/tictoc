import { IoClose } from "react-icons/io5"
import { LiaGlobeEuropeSolid } from "react-icons/lia"
import { AiFillCaretDown } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { useForm } from "react-hook-form"

import CustomModal from "../../../../component/Modals/CustomModal"
import styles from './Video.module.css'
import { getUser } from "../../../../hooks/auth/user.localstore"
import Image from "../../../../component/Image"
import Button from "../../../../component/Button"
import * as videosService from '../../../../services/video/videoService'



function EditVideo({ open, close, caption, id, edit }) {

    const userCurrent = getUser()?.data
    const {
        register,
        handleSubmit,
        formState: { isDirty }
    } = useForm({ defaultValues: caption });

    const submitForm = async (data) => {
       await videosService.editVideo({...data, id: id})
       edit(data.caption)
       close()
    }

    return (
        <CustomModal type='profile' isOpen={open}>
            <div className={styles.editContainer}>
                <section className={styles.section}>
                    <div className={styles.dialog}>
                        <form onSubmit={handleSubmit(submitForm)} >
                            <div className={styles.header} >
                                <div></div>
                                <h1 className={styles.H1Header}>Edit video</h1>
                                <div className={styles['close-button']} onClick={close}
                                >
                                    <IoClose size={30} color="#606770" />
                                </div>
                            </div>
                            <div className={styles.infoEdit}>
                                <div className={styles.avatarContainer}>
                                    <Image src={userCurrent.avatar} className={styles.img} />
                                </div>
                                <div className={styles['account-info']}>
                                    <p className={styles.userName}>{userCurrent.userName}</p>
                                    <div className={styles.privacy}>
                                        <LiaGlobeEuropeSolid />
                                        <span className={styles.name}> public</span>
                                        <AiFillCaretDown size={14} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <textarea
                                    placeholder="Caption"
                                    className={styles.input}
                                    defaultValue={caption}
                                    {...register("caption")}
                                />
                                <div className={styles.iconContainer}>
                                    <BsEmojiSmile className={styles.icon} />
                                </div>
                            </div>
                            <div className={styles.footer}>
                                <Button
                                    className={styles.save}
                                    primary
                                    disabled={!isDirty}
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        </CustomModal>
    )
}

export default EditVideo