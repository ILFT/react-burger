import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter } from "react-router-dom"

import AppHeader from '../AppHeader/appHeader';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';



function App() {

  const [ingredients, setIngredients] = useState([]);

  useEffect( () => {
    fetch('https://norma.nomoreparties.space/api/ingredients').then(response => response.json()).then( ({data}) => setIngredients(data))
  }, [])

  return (
    
    <main>
      <div>
        <BrowserRouter>
          <AppHeader />
          <div className={styles.container}>
          <BurgerIngredients  ingredients={ingredients} />
          <BurgerConstructor />
          </div>
        </BrowserRouter>
      </div>

    </main>

  );
}

export default App;