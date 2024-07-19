import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { WS_ORDERS_ALL } from "../../utils/constants";
import { TOrder } from "../../utils/types";
import styles from "./feed.module.css";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/websocket-action";
import FeedFrame from "../../components/feed-frame/feed-frame";



function Feed() {
    const dispatch = useAppDispatch();
    const wsUrl = `${WS_ORDERS_ALL}`;

    const { orders, total, totalToday }: { orders: TOrder[], total: number, totalToday: number } = useAppSelector(store => store.webSocket);
    const [doneOrders, setDoneOrders] = useState(orders.filter(item => item.status === 'done'))
    const [createOrders, setCreateOrders] = useState(orders.filter(item => item.status === 'created'))

    useEffect(() => {
        setDoneOrders(orders.filter(item => item.status === "done"))
        setCreateOrders(orders.filter(item => item.status === 'created'))
    }, [orders]);

    useEffect(() => {

        dispatch({
            type: WS_CONNECTION_START,
            payload: wsUrl
        });

        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        }
    }, [dispatch]);


    return (
        <div className={styles.main_container}>
            <div className={styles.order_array}>
                <p className={`text text_type_main-large mb-5`}>Лента заказов</p>
                <ul className={styles.list}>
                    {
                        orders && orders.map(item => <li key={item._id}><FeedFrame order={item} /></li>)
                    }
                </ul>
            </div>
            <div className={styles.container}>
                <div className={styles.container_number}>
                    <section className={styles.section_size}>
                        <span className="text text_type_main-medium">Готовы:</span>
                        <div className={styles.container_order}>
                            {doneOrders.map(item => <span className={`text_type_digits-default ${styles.done}`}>{item.number}</span>)}

                        </div>
                    </section>
                    <section className={styles.section_size}>
                        <span className="text text_type_main-medium">В работе:</span>
                        <div className={styles.container_order}>
                            {createOrders.map(item => <span className={`text_type_digits-default `}>{item.number}</span>)}
                        </div>
                    </section>
                </div>
                <div className={styles.container}>
                    <p className="text text_type_main-medium">Выполнено за все время:</p>
                    <p className={`${styles.total_order} text text_type_digits-large`}>{total}</p>
                </div>
                <div className={styles.container}>
                    <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                    <p className={`${styles.total_order} text text_type_digits-large`}>{totalToday}</p>
                </div>
            </div>
        </div>
    )
}



export default Feed;