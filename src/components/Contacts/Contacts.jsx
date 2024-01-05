import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContact } from '../../redux/operation';
import { selecVisibletContacts } from '../../redux/selectors';

const Contacts = () => {
  const filtredContacts = useSelector(selecVisibletContacts);
  const dispatch = useDispatch();

  const handleDeletContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <>
      <h2 className=" mb-4 text-3xl">Contacts:</h2>
      <ul>
        {filtredContacts.map(({ id, name, number }) => (
          <li key={id} className="mb-2 rounded-lg border-4 border-gray-500 p-4">
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => handleDeletContact(id)}
              className="mt-2 rounded-lg bg-blue-500 px-2 text-white hover:bg-rose-600 active:bg-rose-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
export default Contacts;
