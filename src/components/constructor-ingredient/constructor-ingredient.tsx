import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IngredientType } from "../../utils/types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-ingredient.module.css';
import { BURGER_CONSTRUCTOR_DELETE_INGREDIENT, BURGER_CONSTRUCTOR_MOVE_INGEDIENT } from "../../services/actions/burger-constructor-action";
import { BURGER_INGREDIENTS_DECREASE_INGREDIENT } from "../../services/actions/burger-ingredients-action";
import { useAppDispatch } from "../../hooks/hooks";

function ContructorIngredient({ ingredient, index }: { ingredient: IngredientType, index: number }) {


  const dispatch = useAppDispatch();



  function removeIngredient(index: number, ingredient: IngredientType) {

    dispatch({
      type: BURGER_CONSTRUCTOR_DELETE_INGREDIENT,
      index: index
    })
    dispatch({
      type: BURGER_INGREDIENTS_DECREASE_INGREDIENT,
      decreaseIngredient: ingredient
    })
  }





  const [, drag] = useDrag({

    type: "constructorCard",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({

    accept: "constructorCard",
    hover(item: { index: number }) {
      if (item.index !== index) {
        dispatch({
          type: BURGER_CONSTRUCTOR_MOVE_INGEDIENT,
          indexDragged: item.index,
          indexDroped: index ?? 0,
        });
      }
      item.index = index;

    }

  });

  const refRes = useRef(null)
  drag(drop(refRes))

  return (
    <div className={styles.burger_ingredient} ref={refRes}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
        handleClose={() => removeIngredient(index, ingredient)}
      />
    </div>

  );
}

export default ContructorIngredient; 