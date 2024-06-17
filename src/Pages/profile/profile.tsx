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


    const [values, onChange] = useForm({email: userData.email, password: "", name: userData.name})

    const [userDataChange, setUserDataChange] = useState(false);

    const [buttonClick, setbuttonClick] = useState('');

   
    const onChangeInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        onChange(e)
        setUserDataChange(true)
    }


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
            dispatch(patchUser(values.Email, values.Password, values.Name)).then(result => {
                if (result && result.success) {
                    onChange({email: userData.email, password: "", name: userData.name})
                }
            })
    }

    function reset() {
            dispatch(getUser()).then(result => {
                if (result && result.success) {
                    onChange({email: userData.email, password: "", name: userData.name})
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
                    onChange={onChangeInput}
                    icon={'EditIcon'}
                    value={values.Name}
                    id={"name"}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                />
                <EmailInput
                    onChange={onChangeInput}
                    value={values.Email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}

                />
                <PasswordInput
                    onChange={onChangeInput}
                    name={'passwordValue'}
                    icon={'EditIcon'}
                    value={values.Password !== undefined ? values.Password : ''}
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