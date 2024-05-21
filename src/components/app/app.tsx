import React, { useEffect, useState, createContext } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';


function App() {

  const [ingredients, setIngredients] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const [burgerIngredient, setBurgerIngredient] = useState([]);

  function addIngredient(ingredient: never){
    setBurgerIngredient([...burgerIngredient, ingredient]);
    //console.log(ingredient)
  }
  function removeIngredient(indexIngredient: any){
    setBurgerIngredient([...burgerIngredient.slice(indexIngredient, 1)]);
    console.log(burgerIngredient)
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
        setIsLoad(true);
      }).catch(console.error);
    }

  }, [])


  if (isLoad) {
    return (
      <BrowserRouter>
        <AppHeader />
        <main className={styles.container}>
            <BurgerIngredients ingredients={ingredients} addIngredient={addIngredient}/>
            <BurgerConstructor ingredients={ingredients} removeIngredient={removeIngredient} burgerIngredients={burgerIngredient}/>
        </main>
      </BrowserRouter>
    )
  } else {
    return null;

  }

}

export default App;