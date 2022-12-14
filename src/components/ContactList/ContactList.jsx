// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactListGroup>
      {visibleContacts.map(({ id, name, number }) => (
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
