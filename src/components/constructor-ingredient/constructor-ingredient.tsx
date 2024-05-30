import { useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { IngredientType, RectResult } from "../../utils/types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-ingredient.module.css';
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../services/stores/store";

function ContructorIngredient({ ingredient, index }: { ingredient: IngredientType, index: number }) {


  const dispatch = useDispatch();

  //const ingredients = useSelector<ReturnType<typeof store.getState>>(store => store.burgerConstructorData.ingredients);


  function removeIngredient(index: number, ingredient: IngredientType) {

    dispatch({
      type: "BURGER_CONSTRUCTOR_DELETE_INGREDIENT",
      index: index
    })
    dispatch({
      type: "BURGER_INGREDIENTS_DECREASE_INGREDIENT",
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
          type: 'BURGER_CONSTRUCTOR_MOVE_INGEDIENT',
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
    <div className={styles.burger_ingredient} key={index} ref={refRes}>
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