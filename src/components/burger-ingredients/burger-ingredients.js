import React, { useState, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient'
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {useModal} from '../../hooks/hooks'


function BurgerIngredients({ ingredients, isSelectedRoll, checkCount }) {
        const [current, setCurrent] = useState('rolls');
        const { isModalOpen, openModal, closeModal } = useModal();

        const [ingredient, setIngredient] = useState({});

        const rollIngredients = useMemo(() => {
                return ingredients.filter((ingredient) => ingredient.type === "bun");
        }, [ingredients]);

        const sauceIngredients = useMemo(() => {
                return ingredients.filter((ingredient) => ingredient.type === "sauce");
        }, [ingredients]);

        const fillingIngredients = useMemo(() => {
                return ingredients.filter((ingredient) => ingredient.type === "main");
        }, [ingredients]);

        function modalWindowOpen(ingredient) {
                setIngredient(ingredient);
                openModal();
        }
        function modalWindowClose() {
                setIngredient({});
                closeModal();
        }

        return (

                <div className={styles.size}>
                        <section>
                                <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
                                <div className={styles.container}>
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
                                                        
                                                                <div className={styles.container_ingredientroll} key={ingredient._id}>
                                                                        <div className={styles.container_ingredientroll_data} onClick={() => modalWindowOpen(ingredient)}>
                                                                                <img src={ingredient.image} alt={ingredient.name} />
                                                                                <div className={styles.container_cost}>
                                                                                        <p className="text text_type_main-default pr-1">{ingredient.price}</p>
                                                                                        <CurrencyIcon type='primary' />
                                                                                </div>
                                                                                <p align='center' className="text text_type_main-default pr-1">{ingredient.name}</p>
                                                                        </div>
                                                                
                                                                {(isSelectedRoll === ingredient) &&
                                                                        <div className={styles.container_ingredientroll_counter}>
                                                                                        <Counter count={2} size="default" />
                                                                        </div>
                                                                }
                                                                </div>
                                                        
                                                ))}

                                        </div>
                                </div>
                                <div>
                                        <p className="text text_type_main-medium pr-1"  >Соусы</p>
                                        <div className={styles.container_ingredient}>
                                                {sauceIngredients.map((ingredient) => (
                                                        <Ingredient checkCount={checkCount} ingredientInfo={modalWindowOpen} key={ingredient._id} ingredient={ingredient} />

                                                ))}
                                        </div>
                                </div>
                                <div>
                                        <p className="text text_type_main-medium pr-1"  >Начинка</p>
                                        <div className={styles.container_ingredient}>
                                                {fillingIngredients.map((ingredient) => (
                                                        <Ingredient checkCount={checkCount} ingredientInfo={modalWindowOpen} key={ingredient._id} ingredient={ingredient} />
                                                ))}
                                        </div>
                                </div>


                        </section >
                        {isModalOpen &&
                                <div className={styles.modal}>
                                        {
                                                <Modal header="Внимание!" closeWindow={modalWindowClose} >
                                                        <IngredientDetails props={ingredient} closeWindow={modalWindowClose}/>
                                                </Modal>
                                        }
                                </div>
                        }
                </div >

        );
}


export default BurgerIngredients; 