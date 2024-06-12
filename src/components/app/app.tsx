import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { initIngredients } from '../../services/actions-thunk';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../Pages/login/login';
import NotFound from '../../Pages/not-found-page/not-found-page';
import ForgotPassword from '../../Pages/forgot-password/forgot-password';
import Profile from '../../Pages/profile/profile';
import Register from '../../Pages/register/register';
import ResetPassword from '../../Pages/reset-password/reset-password';
import Ingredient from '../../Pages/ingredient-details-page/ingredient-details-page';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { IIngredientOrderDetails } from '../../utils/types';




function App() {

  const dispatch = useAppDispatch();

  const [isLoad, setIsLoad] = useState<boolean>(false);

  const modal = useAppSelector(store => store.ingredientOrderDetailData) as IIngredientOrderDetails;


  useEffect(() => {
    if (!isLoad) {
      dispatch(initIngredients());
      setIsLoad(true);
    }

  }, [])






  //        <Route path="/error" element={}/>
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={isLoad && (
          <DndProvider backend={HTML5Backend}>
            <main className={styles.container}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          </DndProvider>
        )} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/ingredients/:id" element={<Ingredient />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      {modal.isModalIngredient &&
        <Routes>
          <Route path="/ingredients/:id" element={
            <Modal >
              <IngredientDetails />
            </Modal>
          }>
          </Route>
        </Routes >
      }
    </>
  );


}

export default App;