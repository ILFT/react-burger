import React from "react";
import styles from "./ingredient-details.module.css";


function IngredientDetails(props) {
    return (
        <div className={styles.ingredient_info}>

            <div className={styles.center_align}>
                <img src={props.props.image} className={styles.ingredient_image} alt={props.props.name} />
            </div>
            <p className={styles.center_align + " text text_type_main-medium pt-4 pb-8"} >
                {props.props.name}
            </p>


            <div className={styles.description + " pr-15 pl-15"}>
                <div className={styles.data_info}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Калории,ккал</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.calories}</p>
                </div>
                <div className={styles.data_info}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Белки, г</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.proteins}</p>
                </div>
                <div className={styles.data_info}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Жиры, г</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.fat}</p>
                </div>
                <div className={styles.data_info}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Углеводы, г</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.carbohydrates}</p>
                </div>
            </div>
        </div>
    );

};


export default IngredientDetails;