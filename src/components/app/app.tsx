import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useDispatch } from 'react-redux';
import { initIngredients } from '../../services/actions-thunk';
import { useAppDispatch } from '../../hooks/hooks';




function App() {

  const dispatch = useAppDispatch();

  const [isLoad, setIsLoad] = useState<boolean>(false);




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