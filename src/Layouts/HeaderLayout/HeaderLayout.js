import Header from "../Common/Header";
import { Outlet } from "react-router-dom";


function HeaderLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default HeaderLayout