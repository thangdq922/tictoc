import Header from "../Common/Header";
import SideBar from "../Common/Sidebar";
import styles from "./Default.module.css"


function Default({children}) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Default