
import { Button, EmailInput, } from "@ya.praktikum/react-developer-burger-ui-components";

import { Link, useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.css";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks/hooks";
import { resetPasswordRequest } from "../../services/actions-thunk";



function ForgotPassword() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [values, onChange] = useForm({email: ""})



    async function resetPassword(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        dispatch(resetPasswordRequest(values.Email)).then(result=>{
            if (result && result.success) {
                navigate("/reset-password" )

            }
        })
    }


    return (
        <form className={styles.container} onSubmit={resetPassword}>
            <h1 className="text text_type_main-medium "> Восстановление пароля </h1>
            <EmailInput
                onChange={onChange}
                value={values.Email}
                name={'email'}
                isIcon={false}
            />
            <Button type="primary" size="large" htmlType="submit" >Восстановить</Button>
            <p className="text text_type_main-default text_color_inactive mt-20">{'Вспомнили пароль?  '}
                <Link to="/login" >Войти</Link>
            </p>
        </form>
    )

};
export default ForgotPassword;




