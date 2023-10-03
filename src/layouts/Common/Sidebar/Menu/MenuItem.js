import { NavLink } from "react-router-dom"

import styles from './Menu.module.css'


function MenuItem({to , children, icon}){
    return(
    <NavLink className={( {isActive} ) => [styles['menu-item'], isActive && styles.active].join(' ')} to={to}>
        {icon}
        <span className={styles.title} > {children}</span>
    </NavLink>
)}

export default MenuItem