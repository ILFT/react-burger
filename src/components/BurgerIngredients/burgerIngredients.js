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
                        <section className={styles.container}>
                                
                                {rollIngredients.map((ingredient) => (
                                        <div key={ingredient._id}>
                                                <IngredientWindow ingredient={ingredient} />
                                        </div>
                                ))}
                                {sauceIngredients.map((ingredient) => (
                                        <div key={ingredient._id}>
                                                <IngredientWindow ingredient={ingredient} />
                                        </div>
                                ))}
                                {fillingIngredients.map((ingredient) => (
                                        <div key={ingredient._id}>
                                                <IngredientWindow ingredient={ingredient} />
                                        </div>
                                ))}
                        </section>
                </div>

        );
}


export default BurgerIngredients; 