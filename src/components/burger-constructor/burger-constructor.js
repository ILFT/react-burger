import React, { useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDrop } from 'react-dnd'

function BurgerConstructor({ addIngredient, removeIngredient, changeRoll, burgerIngredients }) {

    const rollUpLower = changeRoll;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (item) => addIngredient(item)
    })


    function modalWindowOpen() {
        setIsModalVisible(true);
    }
    function modalWindowClose() {
        setIsModalVisible(false);
    }

    function getCostBurger() {
        if (burgerIngredients.length > 0) {
            return burgerIngredients.map(ingredient => (ingredient.price)).reduce((a, b) => {
                return a + b;
            }) + 2 * rollUpLower.price;
        } else {
            return 2 * rollUpLower.price;
        }

    }

    return (

        <section className={styles.constructor} ref={dropRef}>
            <div className={styles.roll}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={rollUpLower.name + "(верх)"}
                    price={rollUpLower.price}
                    thumbnail={rollUpLower.image_mobile}
                />
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
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={rollUpLower.name + "(низ)"}
                    price={rollUpLower.price}
                    thumbnail={rollUpLower.image_mobile}
                />
            </div>
            <div className={styles.sum}>
                <div className={styles.sum}>
                    <p className={styles.icon_text}>
                        {getCostBurger()}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={modalWindowOpen}>
                    Оформить заказ
                </Button>
            </div>
            {isModalVisible &&
                <div className={styles.modal}>
                    {
                        <Modal header="Внимание!" closeWindow={modalWindowClose} >
                            <OrderDetails />
                        </Modal>
                    }
                </div>
            }
        </section>



    );

}


export default BurgerConstructor; 