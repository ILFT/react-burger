import React from 'react';
import styles from './app-header.module.css';
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <nav className={styles.container_menu}>
                <ul className={styles.container_menu}>
                    <li className={styles.container_menu_element}>
                        <NavLink to='/' className={({ isActive }) => (isActive ? styles.link_active : styles.link)}>
                            <BurgerIcon type={location.pathname === '/' ? "primary" : "secondary"} />
                            <p className={styles.icon_text}>Конструктор</p>
                        </NavLink>
                    </li>
                    <li className={styles.container_menu_element}>
                        <NavLink to='/list' className={({ isActive }) => (isActive ? styles.link_active : styles.link)}>
                            <ListIcon type={location.pathname === '/list' ? "primary" : "secondary"} />
                            <p className={styles.icon_text}>Лента заказов</p>
                        </NavLink>
                    </li>
                </ul>
                <NavLink className={styles.logo} to='/'>
                    <Logo />
                </NavLink>
                <ul className={styles.container_menu}>
                    <li className={styles.container_menu_element}>
                        <NavLink to='/profile' className={({ isActive }) => (isActive ? styles.link_active : styles.link)}>
                            <ProfileIcon type={location.pathname === '/profile' ? "primary" : "secondary"} />
                            <p className={styles.icon_text} >Личный кабинет</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default AppHeader; 