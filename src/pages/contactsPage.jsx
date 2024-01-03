import { AddContact } from '../components/AddContact/AddContact';
import { Filter } from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectToken } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchGetContacts } from '../redux/operation';
import { UserMenu } from '../components/UserMenu';
const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(fetchGetContacts(token));
  }, [dispatch, token]);
  return (
    <>
      <UserMenu></UserMenu>
      <AddContact></AddContact>
      <Filter></Filter>
      {isLoading && !error && <b>loading in progress...</b>}
      <Contacts></Contacts>;
    </>
  );
};
export default ContactsPage;
