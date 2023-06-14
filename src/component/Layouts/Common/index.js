import Header from "./Header";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Common.module.css"


function Common() {
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

export default Common