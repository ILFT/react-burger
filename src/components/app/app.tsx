import React, { useEffect, useState, createContext } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { AppDispatch, IngredientType } from '../../utils/types'
import { useDispatch } from 'react-redux';
import { request } from '../../utils/utils';



function App() {

  const dispatch : any = useDispatch();

  const [isLoad, setIsLoad] = useState<boolean>(false);


  function initIngredients() {
    
    return async (dispatch: AppDispatch) =>{
      dispatch({
        type: 'BURGER_INGREDIENTS_INITIAL'
      })
      request('https://norma.nomoreparties.space/api/ingredients').then(data => {
        if (data) {
          dispatch({
            type: 'BURGER_INGREDIENTS_INITIAL_SUCCESS',
            rolls: data.data.filter((roll: IngredientType) => roll.type === "bun"),
            fillings: data.data.filter((filing: IngredientType) => filing.type === "main"),
            sauces: data.data.filter((sauce: IngredientType) => sauce.type === "sauce"),
          })
          dispatch({
            type: "BURGER_CONSTRUCTOR_CHANGE_ROLL",
            roll: data.data.filter((roll: IngredientType) => roll.type === "bun")[0]
          })
          dispatch({
            type: "BURGER_INGREDIENTS_CHANGE_ROLL",
            changeRoll: data.data.filter((roll: IngredientType) => roll.type === "bun")[0]
          })

          setIsLoad(true);
        } else {
          dispatch({
            type: 'BURGER_INGREDIENTS_INITIAL_FAILED',
          });
        }
      }).catch(console.error);
    }
  }

  useEffect(() => {
    if (!isLoad) {
      dispatch(initIngredients());
      setIsLoad(true);
    }

  }, [])


  if (isLoad) {
    return (
      <BrowserRouter>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <main className={styles.container}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      </BrowserRouter>
    )
  } else {
    return null;

  }

}

export default App;