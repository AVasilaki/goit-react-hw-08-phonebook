import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../redux/selectors';

const PrivatRoots = () => {
  const { isLoggedIn } = useSelector(getUser);
    return isLoggedIn ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>;
};

export default PrivatRoots;
