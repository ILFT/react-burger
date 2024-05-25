import React from "react";
import styles from "./ingredient-details.module.css";
import { IngredientType } from '../../utils/types'

function IngredientDetails({ ingredient }: { ingredient: IngredientType | undefined }) {
    return (
        ingredient ?
            <div className={styles.ingredient_info} >

                <div className={styles.name_icon}>
                    <p className="text text_type_main-medium">Делати ингредиента</p>

                </div>
                <div className={styles.image_ingredient_div}>
                    <img src={ingredient.image} className={styles.ingredient_image} alt={ingredient.name} />
                </div>
                <p className={styles.name_ingredient + " text text_type_main-medium pt-4 pb-8"} >
                    {ingredient.name}
                </p>


                <div className={styles.description + " pr-15 pl-15"}>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Калории,ккал</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredient.calories}</p>
                    </div>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Белки, г</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredient.proteins}</p>
                    </div>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Жиры, г</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredient.fat}</p>
                    </div>
                    <div className={styles.data_info}>
                        <p className="text text_type_main-default text_color_inactive pb-2">Углеводы, г</p>
                        <p className="text text_type_main-default text_color_inactive">{ingredient.carbohydrates}</p>
                    </div>
                </div>
            </div> : <div></div>


    );

};


export default IngredientDetails;