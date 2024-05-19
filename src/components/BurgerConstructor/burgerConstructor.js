import React from 'react';
import styles from './burgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {



    return (

        <aside className={styles.constructor}>
            <div>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                //thumbnail={}
                />
            </div>
                //cycle for all ingredinets maybe use li for swap position
            <div></div>
            <div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                //thumbnail={}
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
        </aside>

    );

}


export default BurgerConstructor; 