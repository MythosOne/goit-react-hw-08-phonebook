
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout }  from './SharedLayout';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
    </Container>
  );
};
