import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./profile.module.css";


function Profile() {

    const [valueName, setValueName] = useState('')
    const onChangeName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueName(e.target.value)
    }
    const [valueEmail, setValueEmail] = useState('')
    const onChangeEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueEmail(e.target.value)
    }

    const [valuePassword, setValuePassword] = React.useState('')
    const onChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValuePassword(e.target.value)
    }

    return (
        <form className={styles.container} >


            <div className={styles.container_left} >
                <nav className={styles.container_menu}>
                    <ul className={`text text_type_main-medium text_color_inactive ${styles.ul_none_dot}`} >
                        <li className={`mb-10 `}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
                                to={'/profile'}
                            >Профиль
                            </NavLink>
                        </li>
                        <li className={`mb-10 `}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
                                to={'/profile/orders'}
                            >История заказов
                            </NavLink>
                        </li>
                        <li className={`mb-10`}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
                                to={'/'}
                            >Выход
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                <p className={`text_type_main-default text_color_inactive`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            < div className={styles.container_data} >
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    name={"name"}
                    onChange={onChangeName}
                    icon={'EditIcon'}
                    value={valueName}
                    id={"name"}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                />
                <EmailInput
                    onChange={onChangeEmail}
                    value={valueEmail}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}

                />
                <PasswordInput
                    onChange={onChangePassword}
                    name={'passwordValue'}
                    icon={'EditIcon'}
                    value={valuePassword !== undefined ? valuePassword : ''}
                    id={"password"}
                />

                {
                    (false) && (
                        <div className={`mb-10 ${styles.buttons}  `}  >
                            <Button name="Reset" htmlType="submit" type="secondary" size="medium" >
                                Отменить
                            </Button>
                            <p></p>
                            <Button name="Save" htmlType="submit" type="primary" size="medium"  >
                                Сохранить
                            </Button>
                        </div>)
                }

            </div>
        </form>
    )
}

export default Profile;