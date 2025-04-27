import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contacts/contactsSlice';
import Contact from './contact';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
