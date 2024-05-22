import React, { useState } from 'react';
import styles from './ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'


function Ingredient({ addIngredient, ingredient, checkСount }) {

        return (
                //console.log(addIngredient())
                <div className={styles.container_ingredient} onClick={() => addIngredient(ingredient)}>
                        <img src={ingredient.image} alt={ingredient.name} />
                        <div className={styles.container_cost}>
                                <p className="text text_type_main-default pr-1">{ingredient.price}</p>
                                <CurrencyIcon type='primary' />
                        </div>
                        <div>
                                <p align='center' className="text text_type_main-default pr-1">{ingredient.name}</p>
                        </div>
                        {
                                (checkСount(ingredient) > 0) && <Counter count={checkСount(ingredient)} size="default" extraClass={styles.counter} />
                        }
                </div>


        );
}


export default Ingredient; 