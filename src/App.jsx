import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/contactsOps';
import { selectLoading, selectError } from './redux/contacts/contactsSlice';
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;