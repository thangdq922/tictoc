import axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video"
import styles from './Home.module.css'


function Home(){
    const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios({
        method: 'get',
        url: 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json',
       
    })
        .then((response) => {
            console.log(response.data)
            setVideos(response.data);
        })
        .catch(error => console.log(error))
  }, []);
  return (
    <div
      id="focus"
      tabIndex="1"
      className = {styles.wrapper}
    >
      {videos.map((video, index) => (
        <Video key={index} data={video} />
      ))}
    </div>
  );
}

export default Home