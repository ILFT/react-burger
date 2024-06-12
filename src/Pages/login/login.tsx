import React, { useState } from "react";
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import styles from "./login.module.css";



function LoginPage() {


    const [valueEmail, setValueEmail] = useState('')
    const onChangeEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueEmail(e.target.value)
    }

    const [valuePassword, setValuePassword] = React.useState('')
    const onChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValuePassword(e.target.value)
    }


    return (
        <form className={styles.container}>
            <h1 className="text text_type_main-medium">   Вход  </h1>
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
                name={'email'}
                isIcon={false}
            />
            <PasswordInput
                onChange={onChangePassword}
                value={valuePassword}
                name={'password'}
            />
            <Button htmlType="submit" type="primary" size="large" >Войти</Button>
            <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?
                <Link to={"/register"} > Зарегистрироваться</Link>
            </p>
            <p className="text text_type_main-default text_color_inactive">Забыли пароль?
                <Link to={"/forgot-password"} > Восстановить пароль</Link>
            </p>

        </form>

    )
}

export default LoginPage;