import React, { useState } from "react";
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./register.module.css";
import { registerUser } from "../../services/actions-thunk";
import { useAppDispatch } from "../../hooks/hooks";

function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [valueName, setValueName] = useState<string>('')
    const [valueEmail, setValueEmail] = useState<string>('')
    const [valuePassword, setValuePassword] = React.useState<string>('')

    function register(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(registerUser(valueEmail, valuePassword, valueName)).then(result=>{
            if (result && result.success) {
                navigate("/")
            }
        })
    }

    return (


        <form className={styles.container} onSubmit={register}>
            <p className="text text_type_main-medium mb-6">Регистрация</p>
            <Input type={'text'}
                placeholder={'Имя пользователя'}
                onChange={e => setValueName(e.target.value)}
                value={valueName}
                name={'name'}
                errorText={'Ошибка'} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

            <EmailInput
                onChange={e => setValueEmail(e.target.value)}
                value={valueEmail}
                name={'email'}
                isIcon={false}
            />
            <PasswordInput
                onChange={e => setValuePassword(e.target.value)}
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