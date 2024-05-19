import React from 'react';
import styles from './App.module.css';
import { BrowserRouter } from "react-router-dom"

import AppHeader from '../AppHeader/appHeader';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';



function App() {
  return (
    <main>
      <div>
        <BrowserRouter>
          <AppHeader />
          <div className={styles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
          </div>
        </BrowserRouter>
      </div>

    </main>

  );
}

export default App;