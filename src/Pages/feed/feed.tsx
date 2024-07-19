import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { WS_ORDERS_ALL } from "../../utils/constants";
import { TOrder } from "../../utils/types";
import styles from "./feed.module.css";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/websocket-action";
import FeedFrame from "../../components/feed-frame/feed-frame";



function Feed() {
    const dispatch = useAppDispatch();
    const wsUrl = `${WS_ORDERS_ALL}`;

    const { orders }: { orders: TOrder[] } = useAppSelector(store => store.webSocket);

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
        <div>

            <h1 className={`${styles.text} text text_type_main-large mb-5`}>Лента заказов</h1>
            < div className={styles.container} >

                <div className={styles.container_div_left}>
                    <ul className={styles.list}>
                        {
                            orders && orders.map(item =>  <li key={item._id+item.number}><FeedFrame order={item}/></li> )
                        }
                    </ul>
                </div>
                <div className={styles.container_div_left}>

                </div>

            </div>

        </div>
    )
}



export default Feed;