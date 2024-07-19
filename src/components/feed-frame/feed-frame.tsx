
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrder } from '../../utils/types';
import styles from './feed-frame.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



function FeedFrame({order, status}:{order: TOrder, status?: string}) {
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

    return (
        <Link to={status ? `/profile/order/${order.number}` : `/feed/${order.number}`} state={{ prevLocation: location }}>
            <span>#{order.number}<FormattedDate date={new Date(order.createdAt)} /></span>
            <span className={`text_type_main-default mb-2  mt-5`}>{order.name}</span>
            {status && <span className={`text_type_main-default mb-8  mt-2   ${status === 'done' && styles.done}`}>{orderStatus.get(status)}</span>}
            <div>{ingredientWithoutDuplicate.map((item, index) => {
                if (index < 5) {
                    return <img src={item?.image} alt="ингредиент бургера" className={styles.ingredient_image} />
                } else {
                    return
                }
            })
                // if(ingredientWithoutDuplicate.length > 5 ){

                //     }
            }


            </div>
        </Link>
    );
}


export default FeedFrame; 