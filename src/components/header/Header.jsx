import React from 'react'
import {NavLink} from "react-router-dom";
import s from './header.module.scss'

const links = [
    {id: 1, value: 'Home', to: '/home' },
    {id: 2, value: 'Settings', to: '/settings' }
]

const Header = () => {
    return (
        <header className={s.header_section}>
            <h2 id='calculator_App'>Calculator App</h2>
            <nav>
                <ul id='navigation_links'>
                    {links.map(({id, value, to}) => (
                        <li className={s.nav_items_li} key={id}>
                            <NavLink id={'link' + id} className={({ isActive }) => `${isActive ? s.active : ''} ${s.nav_items_links}`} to={to}>{value}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header