import Header from "../Common/Header";
import SideBar from "../Common/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Default.module.css"


function Default() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Default