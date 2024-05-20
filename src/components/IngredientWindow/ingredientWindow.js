import React, { useState } from 'react';
import styles from './ingredientWindow.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'


function IngredientWindow(props) {


        return (
                <div className={styles.container_ingredient}>
                        <img src={props.ingredient.image} alt={props.ingredient.name} />
                        <div className={styles.container_cost}>
                                <p className="text text_type_main-default pr-1">{props.ingredient.price}</p>
                                <CurrencyIcon type='primary' />
                        </div>
                        <div>
                                <p align='center' className="text text_type_main-default pr-1">{props.ingredient.name}</p>
                        </div>
                        {/*<div >
                                {(props.ingredient.counter > 0) && <Counter count={props.ingredient.counter} size="default" />}
                        </div>*/}
                        
                </div>


        );
}


export default IngredientWindow; 