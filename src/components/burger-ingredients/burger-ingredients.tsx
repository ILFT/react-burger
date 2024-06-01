import { useRef, RefObject } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab,} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCart from '../ingredient-cart/ingredient-cart'
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { IBurgerIngredients, IIngredientOrderDetails } from '../../utils/types'
import { BURGER_INGREDIENTS_CHANGE_TAB } from '../../services/actions/burger-ingredients-action';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

function BurgerIngredients() {

        const dispatch = useAppDispatch();

        const rollRef = useRef<HTMLDivElement>(null);
        const filingRef = useRef<HTMLDivElement>(null);
        const sauceRef = useRef<HTMLDivElement>(null);


        const { rolls, fillings, sauces, tab } = useAppSelector(store => store.burgerIngredientsData) as IBurgerIngredients;
        const modal = useAppSelector(store => store.ingredientOrderDetailData) as IIngredientOrderDetails;


        function changeTab(value: string, refTab: RefObject<HTMLDivElement>) {
                setTab(value);
                if (refTab.current) {
                        refTab.current?.scrollIntoView({ behavior: 'smooth' })
                }
        }
        function setTab(value: string) {
                dispatch({
                        type: BURGER_INGREDIENTS_CHANGE_TAB,
                        tab: value
                })
        }

        function scrollingIngredients() {
             
                if (rollRef.current && rollRef.current?.getBoundingClientRect().top > 210  && tab !== 'rolls') {
                        setTab('rolls');
                        return
                }
                if (sauceRef.current && sauceRef.current?.getBoundingClientRect().top > 210 && sauceRef.current?.getBoundingClientRect().top < 260 && tab !== 'sauces') {
                        setTab('sauces');
                        return
                }
                if (filingRef.current && filingRef.current?.getBoundingClientRect().top > 210 && filingRef.current?.getBoundingClientRect().top < 420 && tab !== 'filings') {
                        setTab('filings');
                        return
                }
        }




        return (

                <div className={styles.size}>
                        <section>
                                <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
                                <div className={styles.container}>
                                        <Tab value='rolls' active={tab === 'rolls'} onClick={() => changeTab('rolls', rollRef)}>
                                                Булки
                                        </Tab>
                                        <Tab value='sauces' active={tab === 'sauces'} onClick={() => changeTab('sauces', sauceRef)}>
                                                Соусы
                                        </Tab>
                                        <Tab value='filings' active={tab === 'filings'} onClick={() => changeTab('filings', filingRef)}>
                                                Начинки
                                        </Tab>
                                </div>
                        </section>
                        <section className={styles.container_ingredients} onScroll={scrollingIngredients}>
                                <div ref={rollRef}>

                                        <p className="text text_type_main-medium pr-1" >Булки</p>
                                        <div className={styles.container_ingredient} >
                                                {rolls.map((roll) => (
                                                        <IngredientCart key={roll._id} ingredient={roll} />
                                                ))}

                                        </div>
                                </div>
                                <div ref={sauceRef}>
                                        <p className="text text_type_main-medium pr-1"  >Соусы</p>
                                        <div className={styles.container_ingredient} >
                                                {sauces.map((sauce) => (
                                                        <IngredientCart key={sauce._id} ingredient={sauce} />

                                                ))}
                                        </div>
                                </div>
                                <div ref={filingRef}>
                                        <p className="text text_type_main-medium pr-1"  >Начинка</p>
                                        <div className={styles.container_ingredient}>
                                                {fillings.map((filling) => (
                                                        <IngredientCart key={filling._id} ingredient={filling} />

                                                ))}
                                        </div>
                                </div>


                        </section >
                        {modal.isModalIngredient &&
                                <div className={styles.modal}>
                                        {
                                                <Modal >
                                                        <IngredientDetails />
                                                </Modal>
                                        }
                                </div>
                        }
                </div >

        );
}


export default BurgerIngredients; 