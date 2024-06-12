import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "../reset-password/reset-password.module.css";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";


function ResetPassword() {

    const [valuePassword, setValuePassword] = React.useState('')
    const onChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValuePassword(e.target.value)
    }
    const [valueToken, setValueToken] = React.useState('')
    const onChangeToken = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setValueToken(e.target.value)
    }

    return (
        <form className={styles.container}>
            <h1 className="text text_type_main-medium ">Восстановление пароля</h1>
            <PasswordInput
                onChange={onChangePassword}
                value={valuePassword}
                name={'password'}
            />
            <Input
                type={"text"}
                placeholder={"Введите код из письма"}
                value={valueToken}
                onChange={onChangeToken}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined} />
            <Button type="primary" size="small" htmlType="submit" >
                <p className="text text_type_main-default">Сохранить</p>
            </Button>
            <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?
                <Link to="/login" className="text text_type_main-default pl-2">Войти</Link>
            </span>

        </form>
    );

}

export default ResetPassword;