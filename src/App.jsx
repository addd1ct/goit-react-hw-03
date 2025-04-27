import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/contactsOps';
import { selectLoading, selectError } from './redux/contacts/contactsSlice';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';
import SearchBox from './components/searchBox';
import Layout from './components/layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <h1>Phonebook</h1>
        <SearchBox />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/" element={<ContactForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
