import React, { useState, useMemo } from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientWindow from '../IngredientWindow/ingredientWindow'


function BurgerIngredients(props) {
        const [current, setCurrent] = useState('rolls');

        const rollIngredients = useMemo(() => {
                return props.ingredients.filter((ingredient) => ingredient.type === "bun");
        }, [props.ingredients]);

        const sauceIngredients = useMemo(() => {
                return props.ingredients.filter((ingredient) => ingredient.type === "sauce");
        }, [props.ingredients]);

        const fillingIngredients = useMemo(() => {
                return props.ingredients.filter((ingredient) => ingredient.type === "main");
        }, [props.ingredients]);


        return (

                <div className={styles.size}>
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
                        <section className={styles.container_ingredients}>
                                <div>
                                        <p className="text text_type_main-medium pr-1" >Булки</p>
                                        <div className={styles.container_ingredient}>
                                                {rollIngredients.map((ingredient) => (
                                                        <IngredientWindow key={ingredient._id} ingredient={ingredient} />
                                                ))}
                                        </div>
                                </div>
                                <div>
                                        <p className="text text_type_main-medium pr-1"  >Соусы</p>
                                        <div className={styles.container_ingredient}>

                                                {sauceIngredients.map((ingredient) => (
                                                        <IngredientWindow  key={ingredient._id} ingredient={ingredient} />
                                                ))}
                                        </div>
                                </div>
                                <div>
                                        <p className="text text_type_main-medium pr-1"  >Начинка</p>
                                        <div className={styles.container_ingredient}>

                                                {fillingIngredients.map((ingredient) => (
                                                        <IngredientWindow key={ingredient._id} ingredient={ingredient} />
                                                ))}
                                        </div>
                                </div>


                        </section>
                </div>

        );
}


export default BurgerIngredients; 