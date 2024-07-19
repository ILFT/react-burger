import { NavLink, useNavigate } from "react-router-dom";
import styles from "./user-order.module.css";
import { SyntheticEvent } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { logoutUser } from "../../services/actions-thunk";



function Order() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function logOut(event: SyntheticEvent) {
        event.preventDefault();
        dispatch(logoutUser()).then(result => {
            if (result && result.success) {
                navigate("/")
            }
        })
    }
    return (
        <div>
            <div className={styles.container_left} >
                <nav className={styles.container_menu}>
                    <ul className={`text text_type_main-medium text_color_inactive ${styles.ul_none_dot}`} >
                        <li className={`mb-10 `}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
                                to={'/profile'}
                            >Профиль
                            </NavLink>
                        </li>
                        <li className={`mb-10 `}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
                                to={'/profile/orders'}
                            >История заказов
                            </NavLink>
                        </li>
                        <li className={`mb-10`}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
                                to={'/'}
                                onClick={logOut}
                            >Выход
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                <p className={`text_type_main-default text_color_inactive`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <ul className={styles.list}>


            </ul>
        </div>
    )
}



export default Order;