import Header from "../Common/Header";


function HeaderLayout({children}) {
    return (
        <div>
            <Header />
            <div style={{width:'100%'}}>
                {children}
            </div>
        </div>
    )
}

export default HeaderLayout