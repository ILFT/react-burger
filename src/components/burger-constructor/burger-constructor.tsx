import React, { useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDrop } from 'react-dnd'
import { useModal } from '../../hooks/hooks'
import { IngredientType } from '../../utils/types'

function BurgerConstructor({ addIngredient, removeIngredient, changeRoll, burgerIngredients }: { addIngredient: Function, removeIngredient: Function, changeRoll?: IngredientType, burgerIngredients: IngredientType[] }) {

    const rollUpLower = changeRoll;

    const { isModalOpen, openModal, closeModal } = useModal();

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (item) => addIngredient(item)
    })


    function getCostBurger() {
        if (rollUpLower) {
            if (burgerIngredients.length > 0) {
                return burgerIngredients.map(ingredient => (ingredient.price)).reduce((a, b) => {
                    return a + b;
                }) + 2 * rollUpLower.price;
            } else {
                return 2 * rollUpLower.price;
            }
        }

    }

    return (

        <section className={styles.constructor_burger} ref={dropRef}>
            <div className={styles.roll}>
                {rollUpLower &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={rollUpLower.name + "(верх)"}
                        price={rollUpLower.price}
                        thumbnail={rollUpLower.image_mobile}
                    />
                }
            </div>
            <div className={styles.container_ingredients} >
                {
                    burgerIngredients.map((ingredient, index) => (

                        <div className={styles.burger_ingredient} key={index}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image_mobile}
                                handleClose={() => removeIngredient(index)}
                            />
                        </div>

                    ))
                }
            </div>
            <div className={styles.roll}>
                {rollUpLower &&
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={rollUpLower.name + "(низ)"}
                        price={rollUpLower.price}
                        thumbnail={rollUpLower.image_mobile}
                    />
                }
            </div>
            <div className={styles.sum}>
                <div className={styles.sum}>
                    <p className={styles.icon_text}>
                        {getCostBurger()}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {isModalOpen &&
                <div className={styles.modal}>
                    {
                        <Modal onClose={closeModal} >
                            <OrderDetails />
                        </Modal>
                    }
                </div>
            }
        </section>



    );

}


export default BurgerConstructor; 