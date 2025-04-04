import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import Contact from './Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const normalizedFilter = filter ? filter.toLowerCase() : '';

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
