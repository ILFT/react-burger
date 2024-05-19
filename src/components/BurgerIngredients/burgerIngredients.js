import React, { useState } from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerIngredients() {
        const [current, setCurrent] = useState('rolls');

        return (
                <div>
                        <section>
                                <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
                                <div style={{ display: 'flex' }}>
                                        <Tab value="rolls" active={current === 'rolls'} onClick={setCurrent}>
                                                Булки
                                        </Tab>
                                        <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
                                                Соусы
                                        </Tab>
                                        <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>
                                                Начинки
                                        </Tab>
                                </div>
                        </section>
                        <section>
                                // cycle for tab data
                                <div>
                                        // use cylce for function one ingredinet
                                </div>
                        </section>
                </div>

        );
}


export default BurgerIngredients; 