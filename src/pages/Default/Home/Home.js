import Video from "../../Common/Videos"
import styles from './Home.module.css'

function Home() {

  return (
    <div
      id="focus"
      tabIndex="1"
      className={styles.wrapper}
    >
      <Video type="for-you" />
    </div>
  );
}

export default Home