import React, { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./profile.module.css";
import { getUser, logoutUser, patchUser, tokenUser } from "../../services/actions-thunk";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks/hooks";


function Profile() {


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userData = useAppSelector(store => store.userData.user);
    const [userDataChange, setUserDataChange] = useState(false);
    const [buttonClick, setbuttonClick] = useState('');
    const [values, onChange, setValues] = useForm({ email: userData.email, password: "", name: userData.name })


    useEffect(() => {
        if (!userData.email && !userData.name) {
            dispatch(getUser())
        }
        if(userData.email && userData.name){
            setValues({ email: userData.email, password: "", name: userData.name })
        }

    }, [userData.email,userData.name])

    
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event)
        setUserDataChange(true)
    }

    

    function logOut(event: SyntheticEvent) {
        event.preventDefault();
        dispatch(logoutUser()).then(result => {
            if (result && result.success) {
                navigate("/")
            }
        })
    }

    function changeData(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        buttonClick === "Save" ? save() : reset()
        setUserDataChange(false);
    }

    function save() {
        dispatch(patchUser(values.email, values.password, values.name)).then(result => {
            if (result && result.success) {
                setValues({ email: userData.email, password: "", name: userData.name })
            }
        })
    }

    function reset() {
        dispatch(getUser()).then(result => {
            if (result && result.success) {
                setValues({ email: userData.email, password: "", name: userData.name })
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
                    value={values.name}
                    id={"name"}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                />
                <EmailInput
                    onChange={onChangeInput}
                    value={values.email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}

                />
                <PasswordInput
                    onChange={onChangeInput}
                    name={'password'}
                    icon={'EditIcon'}
                    value={values.password !== undefined ? values.password : ''}
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