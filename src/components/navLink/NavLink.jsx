import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { getUser } from '../../redux/selectors';

export const NavMenu = () => {
  const { isLoggedIn } = useSelector(getUser);

  return (
    <>
      <header>
        <nav className="mb-2 flex items-start gap-10 font-serif font-medium text-slate-500 hover:font-sans ">
          <Link to="/"> Home</Link>
          {!isLoggedIn && (
            <>
              <Link to="/login"> login</Link>
              <Link to="/register">register</Link>
            </>
          )}
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
