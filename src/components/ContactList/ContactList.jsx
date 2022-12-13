// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log('contacts', contacts);
  console.log('filter', filter);

  // !что то тут не то...

  // const visibleContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <ContactListGroup>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <СontactСard key={id}>
            <Contact
              name={name}
              number={number}
              id={id}
              // onDeleteContact={() => onDeleteContact(id)}
            />
          </СontactСard>
        ))}
    </ContactListGroup>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onDeleteContact: PropTypes.func.isRequired,
// };
