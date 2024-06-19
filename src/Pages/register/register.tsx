import React, { FormEvent } from "react";
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./register.module.css";
import { registerUser } from "../../services/actions-thunk";
import { useAppDispatch, useForm } from "../../hooks/hooks";

function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [values, onChange] = useForm({email: "", password: "", name:""})

    function register(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(registerUser(values.email, values.password, values.name)).then(result=>{
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
                onChange={onChange}
                value={values.name}
                name={'name'}
                errorText={'Ошибка'} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

            <EmailInput
                onChange={onChange}
                value={values.email}
                name={'email'}
                isIcon={false}
            />
            <PasswordInput
                onChange={onChange}
                value={values.password}
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