import React, { useState, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCart from '../ingredient-cart/ingredient-cart'
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { IBurgerIngredients, IIngredientOrderDetails } from '../../utils/types'
import { useDispatch, useSelector } from 'react-redux';
import { store, } from '../../services/stores/store';

function BurgerIngredients() {

        const dispatch = useDispatch();

        const { rolls, fillings, sauces, tab } = useSelector<ReturnType<typeof store.getState>>(store => store.burgerIngredientsData) as IBurgerIngredients;
        const modal = useSelector<ReturnType<typeof store.getState>>(store => store.ingredientOrderDetailData)  as IIngredientOrderDetails;


        function setTab(value: string) {
                dispatch({
                        type: 'BURGER_INGREDIENTS_CHANGE_TAB',
                        tab: value
                })
        }


        return (

                <div className={styles.size}>
                        <section>
                                <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
                                <div className={styles.container}>
                                        <Tab value='rolls' active={tab === 'rolls'} onClick={() => setTab('rolls')}>
                                                Булки
                                        </Tab>
                                        <Tab value='sauces' active={tab === 'sauces'} onClick={() => setTab('sauces')}>
                                                Соусы
                                        </Tab>
                                        <Tab value='filling' active={tab === 'filling'} onClick={() => setTab('filling')}>
                                                Начинки
                                        </Tab>
                                </div>
                        </section>
                        <section className={styles.container_ingredients}>
                                <div>

                                        <p className="text text_type_main-medium pr-1" >Булки</p>
                                        <div className={styles.container_ingredient}>
                                                {rolls.map((roll) => (
                                                        <IngredientCart key={roll._id} ingredient={roll} />
                                                ))}

                                        </div>
                                </div>
                                <div>
                                        <p className="text text_type_main-medium pr-1"  >Соусы</p>
                                        <div className={styles.container_ingredient}>
                                                {sauces.map((sauce) => (
                                                        <IngredientCart key={sauce._id} ingredient={sauce} />

                                                ))}
                                        </div>
                                </div>
                                <div>
                                        <p className="text text_type_main-medium pr-1"  >Начинка</p>
                                        <div className={styles.container_ingredient}>
                                                {fillings.map((filling) => (
                                                        <IngredientCart key={filling._id} ingredient={filling} />

                                                ))}
                                        </div>
                                </div>


                        </section >
                        {modal.isModalIngredient &&
                                <div className={styles.modal}>
                                        {
                                                <Modal >
                                                        <IngredientDetails />
                                                </Modal>
                                        }
                                </div>
                        }
                </div >

        );
}


export default BurgerIngredients; 