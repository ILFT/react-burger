import styles from './ingredient-cart.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from 'react-dnd'
import { IngredientType } from '../../utils/types'
import { INGREDIENTDETAILS_OPEN } from '../../services/actions/ingredient-order-details-action';
import { useAppDispatch, useModal } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';

function IngredientCart({ ingredient }: { ingredient: IngredientType }) {

        const modal =useModal();

        const [, dragRef] = useDrag({
                type: 'ingredient',
                item: ingredient
        })

        return (
                <div className={styles.container_ingredient} ref={dragRef}>
                        <div className={styles.container_ingredient_data} onClick={() => modal.openModalIngredient(ingredient)}>
                                <img src={ingredient.image} alt={ingredient.name} />
                                <div className={styles.container_cost}>
                                        <p className="text text_type_main-default pr-1">{ingredient.price}</p>
                                        <CurrencyIcon type='primary' />
                                </div>
                                <p className={styles.text_align + "text text_type_main-default pr-1"}>{ingredient.name}</p>
                        </div>
                        <div className={styles.container_ingredient_counter}>
                                {
                                        (ingredient.count > 0) && <Counter count={ingredient.count} size="default" />
                                }

                        </div>
                </div>
        );
}


export default IngredientCart; 