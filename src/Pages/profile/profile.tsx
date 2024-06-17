import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./profile.module.css";
import { getUser, logoutUser, patchUser, tokenUser } from "../../services/actions-thunk";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks/hooks";
import { getCookie } from "../../utils/utils";


function Profile() {


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userData = useAppSelector(store => store.userData.user);


    //const {values, onChange} = useForm({email: userData.email, password: "", name: userData.name})

    const [valueName, setValueName] = useState(userData.name)
    const onChangeName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueName(e.target.value)
        setUserDataChange(true)
    }
    const [valueEmail, setValueEmail] = useState(userData.email)
    const onChangeEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueEmail(e.target.value)
        setUserDataChange(true)
    }

    const [valuePassword, setValuePassword] = useState('')
    const onChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValuePassword(e.target.value)
        setUserDataChange(true)
    }

    const [userDataChange, setUserDataChange] = useState(false);

    const [buttonClick, setbuttonClick] = useState('');



    function logOut(event: React.SyntheticEvent) {
        event.preventDefault();
        dispatch(logoutUser()).then(result => {
            if (result.success) {
                navigate("/")
            }
        })
    }

    function changeData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        buttonClick === "Save" ? save() : reset()
        setUserDataChange(false);
    }

    function save() {
        dispatch(patchUser(valueEmail, valuePassword, valueName)).then(result => {
            if (result && result.success) {
                setValueEmail(userData.email)
                setValueName(userData.name)
                setValuePassword('')
            }
        })
    }

    function reset() {
        dispatch(getUser()).then(result => {
            if (result && result.success) {
                setValueEmail(userData.email)
                setValueName(userData.name)
                setValuePassword('')
            }
        })

    }

    return (
        <form className={styles.container} onSubmit={changeData}>


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
                                onClick={logOut}
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
                    (userDataChange) && (
                        <div className={`mb-10 ${styles.buttons}  `}  >
                            <Button name="Reset" htmlType="submit" type="secondary" size="medium" onClick={() => setbuttonClick('Reset')}>
                                Отменить
                            </Button>
                            <p></p>
                            <Button name="Save" htmlType="submit" type="primary" size="medium" onClick={() => setbuttonClick('Save')}>
                                Сохранить
                            </Button>
                        </div>)
                }

            </div>
        </form>
    )
}

export default Profile;