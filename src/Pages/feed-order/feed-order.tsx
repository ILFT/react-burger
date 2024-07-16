import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { TOrder } from "../../utils/types";
import styles from "./feed-order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useMemo, useState } from "react";
import { getOrderByNumber } from "../../utils/utils";


function FeedOrder() {
    const { rolls, fillings, sauces } = useAppSelector(store => store.burgerIngredientsData);
    const { id } = useParams();
    const { orders }: { orders: TOrder[] } = useAppSelector(store => store.webSocket);
    const [order, setOrder] = useState(orders.find(element => element._id === id));
    const [costOrder, setCostOrder] = useState(0);

    const orderStatus = new Map(
        [
            ['done', 'Выполнен'],
            ['pending', 'Готовится'],
            ['created', 'Создан']
        ]
    );
    useEffect(() => {

        if (!order && id) {
            getOrderByNumber(id).then(result => {
                setOrder(result.orders[0])
                
            });
        }
        if(order){
            setCostOrder([...fillings, ...sauces].filter(item => order.ingredients.includes(item._id)).map(item => item.price).reduce((a,b)=> { return a + b}) + 2 * rolls.filter(item => order.ingredients.includes(item._id)).map(item => item.price).reduce((a,b)=> { return a + b}))
        }
        
    }, [order])

    return (
        
        <div>
            <span>#{order?.number}</span>
            <span>{order?.name}</span>
            <span>{orderStatus.get(order ? order.status : "")}</span>
            <span>Состав:</span>
            <ul></ul>
            <div>
                <span>{order?.createdAt + ' i-GMT+3'}</span>
                <span>{costOrder}<CurrencyIcon type="secondary" /></span>
            </div>

        </div>



    );

};


export default FeedOrder;