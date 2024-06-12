import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { initIngredients } from '../../services/actions-thunk';
import { useAppDispatch } from '../../hooks/hooks';

import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from '../../Pages/login/login';
import NotFound from '../../Pages/not-found-page/not-found-page';
import ForgotPasswordPage from '../../Pages/forgot-password/forgot-password';
import ForgotPassword from '../../Pages/forgot-password/forgot-password';
import Profile from '../../Pages/profile/profile';
import Register from '../../Pages/register/register';
import ResetPassword from '../../Pages/reset-password/reset-password';




function App() {

  const dispatch = useAppDispatch();

  const [isLoad, setIsLoad] = useState<boolean>(false);




  useEffect(() => {
    if (!isLoad) {
      dispatch(initIngredients());
      setIsLoad(true);
    }

  }, [])





  //        <Route path="/ingredients/:id" element={}/>
  //        <Route path="/error" element={}/>
  return (
    <BrowserRouter>
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
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>);


}

export default App;