import Header from "./Header";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";


function Common() {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Common