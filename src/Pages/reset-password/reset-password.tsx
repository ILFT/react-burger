import React, { FormEvent, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "../reset-password/reset-password.module.css";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector, useForm } from "../../hooks/hooks";
import { resetPasswordConfirm } from "../../services/actions-thunk";


function ResetPassword() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [values, onChange] = useForm({ password: "", token: "" })

    function reset(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(resetPasswordConfirm(values.password, values.token)).then(result => {
            if (result && result.success) {
                navigate("/")
            }
        })

    }

    return (
        <form className={styles.container} onSubmit={reset}>
            <h1 className="text text_type_main-medium ">Восстановление пароля</h1>
            <PasswordInput
                onChange={onChange}
                value={values.password}
                name={'password'}
            />
            <Input
                type={"text"}
                placeholder={"Введите код из письма"}
                value={values.token}
                onChange={onChange}
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