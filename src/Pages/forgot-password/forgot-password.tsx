
import { Button, EmailInput, } from "@ya.praktikum/react-developer-burger-ui-components";

import { Link } from "react-router-dom";
import styles from "./forgot-password.module.css";
import React, { useState } from "react";


function ForgotPassword() {

    const [valueEmail, setValueEmail] = useState('')
    const onChangeEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueEmail(e.target.value)
    }




    return (
        <form className={styles.container}>
            <h1 className="text text_type_main-medium "> Восстановление пароля </h1>
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
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
