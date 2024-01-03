import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/selectors';
import { logOut } from '../redux/authSlice';
import { contactsClear } from '../redux/contactsSlice';

export const UserMenu = () => {
  const {
    user: { email },
  } = useSelector(getUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(contactsClear());
  };

  return (
    <div className='mb-12'>
      <p className='mb-4'> You are registered as : {email}</p>
      <button
        className='ml-auto rounded-lg bg-blue-500 p-1 text-white hover:bg-green-600 active:bg-rose-700'
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};
