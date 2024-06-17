
import { Button, EmailInput, } from "@ya.praktikum/react-developer-burger-ui-components";

import { Link, useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.css";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetPasswordRequest } from "../../services/actions-thunk";



function ForgotPassword() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //const success = useAppSelector(store => store.userData.conditionSuccess);

    const [valueEmail, setValueEmail] = useState('')


    //const resetPassword = (event : React.FormEvent<HTMLFormElement>) =>{
    //event.preventDefault();
    async function resetPassword(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //const res = await 
        dispatch(resetPasswordRequest(valueEmail)).then(result=>{
            if (result && result.success) {
                navigate("/reset-password" )
                //{ state: { previous: location } }
            }
        })
            //.then(() => {
            //    console.log(success)
            //    console.log(valueEmail)
            //    if (success) {
            //        console.log(success + "1")
            //        console.log(valueEmail + "1")
            //        navigate("/reset-password")
            //    }
            //})
            //.then(() => {
            //    if (success) {
            //       console.log(success + "2")
            //        console.log(valueEmail + "2")
            //        navigate("/reset-password")
            //    }
            //})
        
        
        //navigate("/reset-password")
    }


    return (
        <form className={styles.container} onSubmit={resetPassword}>
            <h1 className="text text_type_main-medium "> Восстановление пароля </h1>
            <EmailInput
                onChange={e => setValueEmail(e.target.value)}
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
