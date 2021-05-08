import React from 'react';

// Components
import ContactForm from './Component/СontactForm/ContactForm';
import ContactList from './Component/ContactList/ContactList';
import Filter from './Component/Filter/Filter';

const App = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />

            <ContactList />
        </div>
    );
};

export default App;
