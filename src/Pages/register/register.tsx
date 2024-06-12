import React, { useState, useEffect } from "react";
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import styles from "./register.module.css";

function Register() {

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


        <form className={styles.container}>
            <p className="text text_type_main-medium mb-6">Регистрация</p>
            <Input type={'text'}
                placeholder={'Имя пользователя'}
                onChange={onChangeName}
                value={valueName}
                name={'name'}
                errorText={'Ошибка'} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

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
            <Button htmlType="submit" type="primary" size="medium" >
                Зарегистрироваться
            </Button>
            <p className="text text_type_main-default text_color_inactive mt-20">
                {'Уже зарегистрированы?   '}
                <Link to="/login">
                    Войти
                </Link>
            </p>
        </form>

    )
}

export default Register;