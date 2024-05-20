import React from 'react';
import styles from './burgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = (props) => {

    const rollUpLower = props.ingredients.find(ingredient => ingredient._id === "643d69a5c3f7b9001cfa093c");
    
    return (

        <section className={styles.constructor}>
            <div>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={rollUpLower.name + "(верх)"}
                    price={rollUpLower.price}
                    thumbnail={rollUpLower.image_mobile}
                />
            </div>
                //cycle for all ingredinets maybe use li for swap position
            <div></div>
            <div>
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
                        610
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>

    );

}


export default BurgerConstructor; 