import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddContact } from '../../redux/operation';

export const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const onSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name1 = form.elements.name.value;
    const number1 = form.elements.number.value;
    const contact = { name: name1, number: number1 };
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name1.toLowerCase().trim()
      )
    ) {
      alert(`${name1} is already in contacts.`);
      form.reset();
      return;
    }

    dispatch(fetchAddContact(contact));

    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className="mb-2 flex flex-col items-start gap-4">
      <h2 className="mb-4 text-3xl">Phonebook</h2>
      <label className="">
        Name:
        <input
          type="text"
          name="name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          className="ml-6 rounded-lg bg-blue-500 px-2 text-white"
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          required
          // pattern='^[ 0-9]+$'
          className="ml-2 rounded-lg bg-blue-500 px-2 text-white"
        />
      </label>
      <button
        type="submit"
        className="ml-auto rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-green-600 active:bg-rose-700"
      >
        add contact
      </button>
    </form>
  );
};

AddContact.propTypes = {
  addNewContact: PropTypes.func,
};
