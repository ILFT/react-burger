import React, { useState } from 'react';
import styles from './ingredient.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'


function Ingredient({addIngredient, ingredient}) {

        return (
                //console.log(addIngredient())
                <div className={styles.container_ingredient} onClick={()=>addIngredient(ingredient)}>
                        <img src={ingredient.image} alt={ingredient.name} />
                        <div className={styles.container_cost}>
                                <p className="text text_type_main-default pr-1">{ingredient.price}</p>
                                <CurrencyIcon type='primary' />
                        </div>
                        <div>
                                <p align='center' className="text text_type_main-default pr-1">{ingredient.name}</p>
                        </div>
                        {/*<div >
                                {(props.ingredient.counter > 0) && <Counter count={props.ingredient.countear} size="default" />}
                        </div>*/}
                        
                </div>


        );
}


export default Ingredient; 