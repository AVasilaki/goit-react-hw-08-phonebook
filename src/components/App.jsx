import { refreshUser } from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavMenu } from './navLink/NavLink';
import { getUser } from '../redux/selectors.js';
import PrivatRoots from './PrivateRout.jsx';

const Home = lazy(() => import('../pages/homePage.jsx'));
const ContactsPage = lazy(() => import('../pages/contactsPage.jsx'));
const Register = lazy(() => import('../pages/registerPage.jsx'));
const Login = lazy(() => import('../pages/loginPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn, isRegestered } = useSelector(getUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <NavMenu></NavMenu>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/login'
            element={isLoggedIn ? <Navigate to='/contacts' /> : <Login />}
          ></Route>
          <Route
            path='/register'
            element={isRegestered ? <Navigate to='/login' /> : <Register />}
          ></Route>
          <Route element={<PrivatRoots></PrivatRoots>}>
            <Route path='/contacts' element={<ContactsPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
