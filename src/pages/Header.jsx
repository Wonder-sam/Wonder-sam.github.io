import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import WebFont from 'webfontloader';
import mobileClasses from "./../styles/header/mobileHeader.module.css"

export default function Header () {
    React.useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka', 'Montserrat', 'Work Sans']
          }
        });
       }, []);
    return (
        <div className={mobileClasses.container}>
            <div className={[mobileClasses.header]}>
                <ul className={[mobileClasses.tabs]}>
                    <li><NavLink to="Home" className={({isActive})=>isActive? mobileClasses.activeClass: mobileClasses.inactiveClass}>_home</NavLink></li>
                    <li><NavLink to="About" className={({isActive})=>isActive? mobileClasses.activeClass: mobileClasses.inactiveClass}>_about</NavLink></li>
                    <li><NavLink to="Projects" className={({isActive})=>isActive? mobileClasses.activeClass: mobileClasses.inactiveClass}>_projects</NavLink></li>
                    <li><NavLink to="Contact" className={({isActive})=>isActive? mobileClasses.activeClass: mobileClasses.inactiveContact}>CONTACT ME</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}