import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ removeIngredient, ingredients, burgerIngredients })  {

    const rollUpLower = ingredients.find(ingredient => ingredient._id === "643d69a5c3f7b9001cfa093c");
    //console.log(burgerIngredients);
    function getCostButrger(){
        if (burgerIngredients.length > 0) {
            return burgerIngredients.map(ingredient => (ingredient.price)).reduce((a, b) => {
                return a + b;
              }) + 2 * rollUpLower.price;
        }else{
            return 2 * rollUpLower.price;
        }
        
    }
    
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
            <div className={styles.container_ingredients}>
                {
                    burgerIngredients.map((ingredient, index) => (
                        <ConstructorElement key={index}
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image_mobile}
                            handleClose={() => removeIngredient(index)}
                        />))
                }
            </div>
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
                        {getCostButrger()}
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