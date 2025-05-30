import React from 'react';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import SearchBox from '../../components/SearchBox';

const ContactsPage = () => {
  return (
    <div>
      <h1>Your Contacts</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
