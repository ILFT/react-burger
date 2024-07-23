import { useMemo } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDrop } from 'react-dnd'
import { IBurgerConstructor, IIngredientOrderDetails, IngredientType } from '../../utils/types'
import ContructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { BURGER_CONSTRUCTOR_ADD_INGREDIENT, BURGER_CONSTRUCTOR_CHANGE_ROLL, BURGER_CONSTRUCTOR_CLEAR, BURGER_CONSTRUCTOR_DELETE_INGREDIENT } from '../../services/actions/burger-constructor-action';
import { BURGER_INGREDIENTS_CHANGE_ROLL, BURGER_INGREDIENTS_CLEAR, BURGER_INGREDIENTS_DECREASE_INGREDIENT, BURGER_INGREDIENTS_INCREASE_INGREDIENT } from '../../services/actions/burger-ingredients-action';
import { getOrderNumber } from '../../services/actions-thunk';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { v4 as uuid } from 'uuid';
import { MODAL_CLOSE } from '../../services/actions/ingredient-order-details-action';
import { useNavigate } from 'react-router-dom';


function BurgerConstructor() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isModal = useAppSelector(store => store.ingredientOrderDetailData);
    const { ingredients, roll } = useAppSelector(store => store.burgerConstructorData);


    function addIngredient(ingredient: IngredientType) {

        if (ingredient.type === 'bun') {
            dispatch({
                type: BURGER_CONSTRUCTOR_CHANGE_ROLL,
                roll: ingredient
            })
            dispatch({
                type: BURGER_INGREDIENTS_CHANGE_ROLL,
                changeRoll: ingredient
            })
        } else {
            dispatch({
                type: BURGER_CONSTRUCTOR_ADD_INGREDIENT,
                ingredient: ingredient,
                uuid: uuid()
            })
            dispatch({
                type: BURGER_INGREDIENTS_INCREASE_INGREDIENT,
                increaseIngredient: ingredient
            })
        }

    }

    function clearConstructor() {
        dispatch({
            type: BURGER_CONSTRUCTOR_CLEAR,
        })
        dispatch({
            type: BURGER_INGREDIENTS_CLEAR,
        })
    
    }

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (item: IngredientType) => addIngredient(item)
    })

    function createOrder() {
        if(localStorage.getItem('refreshToken')){
            if (roll) {
                dispatch(getOrderNumber([roll._id, ...ingredients.map(res => res.ingredient._id), roll._id])).then(()=>clearConstructor());
            }
        }else{
            navigate("/login")
        }
        
    }
    function closeModal() {
        dispatch({ type: MODAL_CLOSE })
    }



    const costBurger = useMemo(() => {
        if (roll) {
            if (ingredients.length > 0) {
                return ingredients.map(item => (item.ingredient.price)).reduce((a, b) => {
                    return a + b;
                }) + 2 * roll.price;
            } else {
                return 2 * roll.price;
            }
        }
    }, [ingredients, roll])




    return (

        <section className={styles.constructor_burger} ref={dropRef} data-test="constructor">
            <div className={styles.roll}>
                {roll &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={roll.name + "(верх)"}
                        price={roll.price}
                        thumbnail={roll.image_mobile}
                    />
                }
            </div>
            <div className={styles.container_ingredients} >
                {
                    ingredients.map((item, index) => (
                        <ContructorIngredient key={item.uuid} ingredient={item.ingredient} index={index} />
                    ))
                }
            </div>
            <div className={styles.roll}>
                {roll &&
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={roll.name + "(низ)"}
                        price={roll.price}
                        thumbnail={roll.image_mobile}
                    />
                }
            </div>
            <div className={styles.sum}>
                <div className={styles.sum}>
                    <p className={styles.icon_text}>
                        {costBurger}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={() => createOrder()}>
                    Оформить заказ
                </Button>
            </div>
            {isModal.isModalOrder &&
                <div className={styles.modal}>
                    {
                        <Modal closeModal={closeModal}>
                            <OrderDetails />
                        </Modal>
                    }
                </div>
            }
        </section>



    );

}


export default BurgerConstructor; 
