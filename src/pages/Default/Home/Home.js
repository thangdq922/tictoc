import ListVideos from "../../Common/Videos/ListVideos"
import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles.wrapper} >
      <ListVideos type="for-you" />
    </div>
  );
}

export default Home