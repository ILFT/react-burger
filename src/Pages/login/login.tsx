import React, { FormEvent, useState } from "react";
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./login.module.css";
import { useAppDispatch, useForm } from "../../hooks/hooks";
import { loginUser } from "../../services/actions-thunk";



function LoginPage() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const [values, onChange] = useForm({email: "", password: ""})


    function login(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        dispatch(loginUser(values.email, values.password)).then(result=>{
            if (result && result.success) {
                navigate("/")
            }
        })
    }

    return (
        <form className={styles.container} onSubmit={login}>
            <h1 className="text text_type_main-medium">   Вход  </h1>
            <EmailInput
                onChange={onChange}
                value={values.email}
                name={'email'}
                isIcon={false}
                data-test='email'
            />
            <PasswordInput
                onChange={onChange}
                value={values.password}
                name={'password'}
                data-test='password'
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