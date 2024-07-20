import { NavLink, useNavigate } from "react-router-dom";
import styles from "./user-order.module.css";
import { SyntheticEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logoutUser } from "../../services/actions-thunk";
import FeedFrame from "../../components/feed-frame/feed-frame";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/websocket-action";
import { WS_ORDERS, WS_ORDERS_ALL } from "../../utils/constants";
import { TOrder } from "../../utils/types";
import { getCookie } from "../../utils/utils";



function Order() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const wsUrl = `${WS_ORDERS}?token=${getCookie('accessToken')}`;

    const { orders } = useAppSelector(store => store.webSocket);


    useEffect(() => {

        dispatch({
            type: WS_CONNECTION_START,
            payload: wsUrl
        });

        console.log(wsUrl);
        console.log(orders)
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);

    function logOut(event: SyntheticEvent) {
        event.preventDefault();
        dispatch(logoutUser()).then(result => {
            if (result && result.success) {
                navigate("/")
            }
        })
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.container_left} >
                <nav className={styles.container_menu}>
                    <ul className={`text text_type_main-medium text_color_inactive ${styles.ul_none_dot}`} >
                        <li className={`mb-10 `}>
                            <NavLink
                                className={styles.link}
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
                    В этом разделе вы можете посмотреть свою историю заказов
                </p>
            </div>
            <ul className={styles.list}>
                {
                    orders && orders.map(item => <li key={item._id}><FeedFrame order={item} status={item.status}/></li>)
                }
            </ul>

        </div>
    )
}



export default Order;