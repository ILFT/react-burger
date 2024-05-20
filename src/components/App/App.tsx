import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter } from "react-router-dom"

import AppHeader from '../AppHeader/appHeader';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';


function App() {

  const [ingredients, setIngredients] = useState([]);
  const [isLoad, setIsLoad] = useState(false);





  useEffect(() => {
    if (!isLoad) {
      fetch('https://norma.nomoreparties.space/api/ingredients').then(response => response.json()).then(data => {
        setIngredients(data.data);
        setIsLoad(true);
      }).catch(err => console.log(err));
    }

  }, [ingredients])


  if (isLoad) {
    return (
      <main>
        <div>
          <BrowserRouter>
            <AppHeader />
            <div className={styles.container}>
              <BurgerIngredients ingredients={ingredients} />
              <BurgerConstructor ingredients={ingredients} />
            </div>
          </BrowserRouter>
        </div>
      </main>
    )
  } else {
    return (
      <main>
        <div>
          <BrowserRouter>
            <AppHeader />
            <div className={styles.container}>
            </div>
          </BrowserRouter>
        </div>
      </main>
    );

  }

}

export default App;