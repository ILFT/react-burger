import React, { useState } from 'react';
import styles from './ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from 'react-dnd'

function Ingredient({ ingredientInfo, ingredient, checkСount }) {

        const [,dragRef] = useDrag({
                type: 'ingredient',
                item: ingredient
        })
        return (
                <div draggable={true} className={styles.container_ingredient} ref={dragRef}>
                        <div className={styles.container_ingredient_data} onClick={() => ingredientInfo(ingredient)}>
                                <img src={ingredient.image} alt={ingredient.name} />
                                <div className={styles.container_cost}>
                                        <p className="text text_type_main-default pr-1">{ingredient.price}</p>
                                        <CurrencyIcon type='primary' />
                                </div>
                                <p align='center' className="text text_type_main-default pr-1">{ingredient.name}</p>
                        </div>
                        <div className={styles.container_ingredient_counter}>
                                {
                                        (checkСount(ingredient) > 0) && <Counter count={checkСount(ingredient)} size="default" />
                                }

                        </div>
                </div>
        );
}


export default Ingredient; 