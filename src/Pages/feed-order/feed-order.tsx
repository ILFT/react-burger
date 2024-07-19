import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { IngredientType, TOrder } from "../../utils/types";
import styles from "./feed-order.module.css";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useMemo, useState } from "react";
import { getOrderByNumber } from "../../utils/utils";


function FeedOrder() {
    const { rolls, fillings, sauces } = useAppSelector(store => store.burgerIngredientsData);
    const { id } = useParams();
    const { orders }: { orders: TOrder[] } = useAppSelector(store => store.webSocket);
    const [order, setOrder] = useState(orders.find(element => element._id === id));
    const [costOrder, setCostOrder] = useState(0);
    const [ingredientCount, setIngredientCount] = useState<{ id: string; count: number; }[]>();

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
    }, [])


    useEffect(() => {
        if (order && !ingredientCount) {
            setIngredientCount(order?.ingredients.reduce((result: { id: string, count: number }[], item) => {
                let rt = result.find((element: { id: string, count: number }) => element.id === item)
                if (rt) {
                    rt.count += 1;
                } else {
                    result.push({ id: item, count: 1 })
                }
                return result;
            }, []));
        }
    }, [order])

    useEffect(() => {
        if (ingredientCount) {
            setCostOrder(ingredientCount.reduce((sum: number, item) => {
                const element = [...rolls, ...fillings, ...sauces].find((element: IngredientType) => element._id === item.id);
                return element ? sum + item.count * element.price : sum

            }, 0))
        }
    }, [ingredientCount])

    return (
        <div className={styles.feed_parent}>
        <div className={styles.feed}>
            <span className={`text_type_main-default ${styles.number_order}`}>#{order?.number}</span>
            <span className={`text text_type_main-medium mb-2  mt-5`}>{order?.name}</span>
            <span className={`text_type_main-default mb-8  mt-2   ${order?.status === 'done' && styles.done}`}>{orderStatus.get(order ? order.status : "")}</span>
            <span className={`text text_type_main-medium`}>Состав:</span>
            <ul className={styles.list}>
                {ingredientCount && ingredientCount.map((item: { id: string, count: number }) => {
                    return (
                        <li className={styles.ingredient}>
                            <div className={styles.ingredient_image_name}>
                                <img src={[...rolls, ...fillings, ...sauces].find(element => element._id === item.id)?.image} alt="ингредиент бургера" className={styles.ingredient_image} />
                                <span className={` text_type_main-default mr-6 ml-4`}> {[...rolls, ...fillings, ...sauces].find(element => element._id === item.id)?.name}  </span>
                            </div>
                            <span className={` text_type_main-default mr-6 ml-3`}> {item.count + " x " + [...rolls, ...fillings, ...sauces].find(element => element._id === item.id)?.price} <CurrencyIcon type="secondary" /></span>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.date_cost}>
                <span >{order && <FormattedDate  className="text text_type_main-default text_color_inactive" date={new Date(order.createdAt)} />}</span>
                <span className={` text_type_main-default mr-6 ml-4`}>{costOrder} <CurrencyIcon type="secondary" /></span>
            </div>
        </div>
        </div>



    );

};


export default FeedOrder;