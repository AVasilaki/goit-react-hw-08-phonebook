import { refreshUser } from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavMenu } from './navLink/NavLink';
import { getUser } from '../redux/selectors.js';
import PrivatRoots from './PrivateRout.jsx';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('../pages/homePage.jsx'));
const ContactsPage = lazy(() => import('../pages/contactsPage.jsx'));
const Register = lazy(() => import('../pages/registerPage.jsx'));
const Login = lazy(() => import('../pages/loginPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(getUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavMenu />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={isLoggedIn ? <Navigate to="/contacts" /> : <Login />}
            />
            <Route
              path="register"
              element={isLoggedIn ? <Navigate to="/contacts" /> : <Register />}
            />
            <Route element={<PrivatRoots />}>
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </Suspense>
    </>
  );
};
