

import {Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/u/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/u/upload">Upload</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
};

export default Header;