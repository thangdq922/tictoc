import ListVideos from "../../Common/Videos"
import styles from '../Home/Home.module.css'

function Following() {
    return (
        <div className={styles.wrapper} >
            <ListVideos type="following" />
        </div>
    );
}

export default Following