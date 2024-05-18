import React from 'react';
import styles from './appHeader.module.css';
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    let location = useLocation();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? styles.link_active : styles.link)}>
                            <BurgerIcon type={location === '/' ? "primary" : "secondary"} />
                            <p className="text text_type_main-default"  >Конструктор</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/list' className={({ isActive }) => (isActive ? styles.link_active : styles.link)}>
                                <ListIcon type={location === '/list' ? "primary" : "secondary"} />
                                <p className="text text_type_main-default" >Лента заказов</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <Logo />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={({ isActive }) => (isActive ? styles.link_active : styles.link)}>       
                                <ProfileIcon type={location === '/profile' ? "primary" : "secondary"} />
                                <p className="text text_type_main-default" >
                                    Личный кабинет
                                </p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default AppHeader; 