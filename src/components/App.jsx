// import { useEffect, useState } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
// import { nanoid } from 'nanoid';

export function App() {
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const savedСontacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(savedСontacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Section headTitle="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
