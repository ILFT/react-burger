import styles from "./ingredient-details-page.module.css";

import { Link, useParams } from "react-router-dom";
import { useMemo } from 'react';
import { useAppSelector } from "../../hooks/hooks";


function Ingredient() {


    const { id } = useParams();
    const { rolls, fillings, sauces } = useAppSelector(store => store.burgerIngredientsData);
    const ingredientDetails = useMemo(() => {
        return [...rolls, ...fillings, ...sauces].find((ingredient) => ingredient._id === id);
    }, [[...rolls, ...fillings, ...sauces], id]);

    if (ingredientDetails) {
        return (
            <div className={styles.ingredient_info} >

                <div className={styles.name_icon}>
                    <p className="text text_type_main-medium">Делати ингредиента</p>
                </div>
                <div className={styles.image_ingredient_div}>
                    <img src={ingredientDetails.image} className={styles.ingredient_image} alt={ingredientDetails.name} />
                </div>
                <p className={styles.name_ingredient + " text text_type_main-medium pt-4 pb-8"} >
                    {ingredientDetails.name}
                </p>


                <div className={styles.description + " pr-15 pl-15"}>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredientDetails.calories}</p>
                    </div>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredientDetails.proteins}</p>
                    </div>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredientDetails.fat}</p>
                    </div>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredientDetails.carbohydrates}</p>
                    </div>
                </div>
            </div>)

    }
    return <Link to={"*"} />



}

export default Ingredient;
