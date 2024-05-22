import React, { useEffect, useState, createContext } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';


function App() {

  const [ingredients, setIngredients] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const [changeRoll, setChangeRoll] = useState();
  const [burgerIngredient, setBurgerIngredient] = useState([]);

  function addIngredient(ingredient: never) {
    setBurgerIngredient([...burgerIngredient, ingredient]);

  }
  function removeIngredient(indexIngredient: never) {
    burgerIngredient.splice(indexIngredient, 1);
    setBurgerIngredient([...burgerIngredient]);
  }
  function changingRoll(roll: never) {
    setChangeRoll(roll);
  }

  useEffect(() => {
    if (!isLoad) {
      fetch('https://norma.nomoreparties.space/api/ingredients').then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
      }).then(data => {
        setIngredients(data.data);
        setChangeRoll(data.data.find((roll: any) => roll._id === "643d69a5c3f7b9001cfa093c"))
        setIsLoad(true);
      }).catch(console.error);
    }

  }, [])


  if (isLoad) {
    return (
      <BrowserRouter>
        <AppHeader />
        <main className={styles.container}>
          <BurgerIngredients ingredients={ingredients} addIngredient={addIngredient} changingRoll={changingRoll} isSelectedRoll={changeRoll} />
          <BurgerConstructor changeRoll={changeRoll} removeIngredient={removeIngredient} burgerIngredients={burgerIngredient} />
        </main>
      </BrowserRouter>
    )
  } else {
    return null;

  }

}

export default App;