import React, { useState } from 'react';
import styles from './ingredientWindow.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'


function IngredientWindow(props) {


        return (
                <div>
                        <img src={props.ingredient.image} alt={props.ingredient.name} />
                        <div >
                                <p className="text text_type_main-default pr-1">{props.ingredient.price}</p>
                                <CurrencyIcon type='primary' />
                        </div>
                        <div >
                                <p className="text text_type_main-default pr-1">{props.ingredient.name}</p>
                        </div>
                        {/*<div >
                                {(props.ingredient.counter > 0) && <Counter count={props.ingredient.counter} size="default" />}
                        </div>*/}
                        
                </div>


        );
}


export default IngredientWindow; 