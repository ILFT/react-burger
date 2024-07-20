
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType, TOrder } from '../../utils/types';
import styles from './feed-frame.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



function FeedFrame({ order, isOrder }: { order: TOrder, isOrder?: boolean }) {
    const location = useLocation();

    const { rolls, fillings, sauces } = useAppSelector(store => store.burgerIngredientsData);
    const [ingredientWithoutDuplicate] = useState(Array.from(new Set(order.ingredients.map(item => [...rolls, ...fillings, ...sauces].find(element => element._id === item)))))
    const orderStatus = new Map(
        [
            ['done', 'Выполнен'],
            ['pending', 'Готовится'],
            ['created', 'Создан']
        ]
    );

    const [costOrder, setCostOrder] = useState(0);
    const [ingredientCount, setIngredientCount] = useState<{ id: string; count: number; }[]>();

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
        <Link to={isOrder ? `/profile/orders/${order.number}` : `/feed/${order.number}`} state={{ prevLocation: location }} className={styles.feed_frame}>
            <div className={styles.split}>
                <span className={`text_type_main-default ml-5 mt-2`}>#{order.number}</span>
                <FormattedDate className={`text text_type_main-default text_color_inactive mr-5 mt-2`} date={new Date(order.createdAt)} />
            </div>
            <span className={`text text_type_main-medium ml-5 `}>{order.name}</span>
            {isOrder && <span className={`text_type_main-default mb-8  mt-2   ${order.status === 'done' && styles.done}`}>{orderStatus.get(order.status)}</span>}
            <div className={styles.split}>
                <ul className={styles.list}>
                    {ingredientWithoutDuplicate.map((item, index) => {
                        if (index < 5) {
                            return <li className={styles.li_size} key ={item?._id}><img src={item?.image} alt="ингредиент бургера" className={styles.ingredient_image} /></li>
                        } else {
                            return
                        }
                    })}
                    {(ingredientWithoutDuplicate.length > 5 ) && <li className={styles.li_size_plus}  key ={ingredientWithoutDuplicate[5]?._id}><img src={ingredientWithoutDuplicate[5]?.image} alt="ингредиент бургера" className={styles.ingredient_image_plus}/><span className={styles.text_up}>+ {ingredientWithoutDuplicate.length - 5}</span ></li> }
                </ul>
                <span className={` text_type_main-default mt-5 mr-6 ml-4 `}>{costOrder} <CurrencyIcon type="primary" /></span>
            </div>
        </Link>
    );
}


export default FeedFrame; 