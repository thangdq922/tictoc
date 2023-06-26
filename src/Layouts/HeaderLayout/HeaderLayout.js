import Header from "../Common/Header";


function HeaderLayout({children}) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default HeaderLayout