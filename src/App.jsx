import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
