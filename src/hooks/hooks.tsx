import { useState, useCallback } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "../services/stores/store";
import { useNavigate } from "react-router-dom";
import { INGREDIENTDETAILS_OPEN, MODAL_CLOSE } from "../services/actions/ingredient-order-details-action";
import { IngredientType } from "../utils/types";

// кастомные хуки всегда должны начинаться с глагола `use`, чтобы реакт понял, что это хук. Он следит за их вызовами
export const useModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // `useCallback` нужен для того, чтобы зафиксировать ссылку на функцию. Таким образом уменьшится кол-во перерисовок компонента, куда будет передана эта функция
  const openModal = useCallback((ingredient: IngredientType) => {
    navigate(`/ingredients/${ingredient._id}`)
    dispatch({
      type: INGREDIENTDETAILS_OPEN,
      ingredient: ingredient
    })
  }, []);

  const closeModal = useCallback(() => {
    navigate(-1)
    dispatch({ type: MODAL_CLOSE })
  }, []);
  return {
    openModal,
    closeModal,
  };
};




export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()