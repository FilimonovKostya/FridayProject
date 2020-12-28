import React from "react";
import {NavLink} from "react-router-dom";
import style from './NavBar.module.css'

type NavBarPropsType = {}

const NavBar: React.FC<NavBarPropsType> = (props) => {
    return <div className={style.header}>
        <input type="checkbox" className={style.openSidebarMenu} id="openSidebarMenu"/>
        <label htmlFor="openSidebarMenu" className={style.sidebarIconToggle}>
            <div className={`${style.spinner} ${style.diagonal} ${style.part1}`}/>
            <div className={`${style.spinner} ${style.horizontal}`}/>
            <div className={`${style.spinner} ${style.diagonal} ${style.part2}`}/>
        </label>
        <div className={style.sidebarMenu}>
            <ul className={style.sidebarMenuInner}>
                <li><NavLink to={'/login'}> LogIn </NavLink></li>
                <li><NavLink to={'/registration'}> Registration </NavLink></li>
                <li><NavLink to={'/passwordRecovery'}> Password recovery</NavLink></li>
                <li><NavLink to={'/newPassword'}> New password </NavLink></li>
                <li><NavLink to={'/profile'}> Profile </NavLink></li>
                <li><NavLink to={'/notFound'}> 404 </NavLink></li>
                <li><NavLink to={'/allComponents'}> All components </NavLink></li>
            </ul>
        </div>
        <div className={`${style.main} ${style.center}`}>
            <div className={style.mainInner}>
            </div>

        </div>

    </div>

}

export default NavBar