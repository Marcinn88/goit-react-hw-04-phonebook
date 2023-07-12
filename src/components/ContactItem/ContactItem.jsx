import React from 'react';
import PropTypes from 'prop-types';
import { ContactItems, ContactName, ContactNumber, Button } from './ContactItem.styled'

function ContactItem({ contact, deleteContact }) {
    const handleDelete = () => {
        deleteContact(contact.id);
    };
    return (
        <ContactItems>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <Button onClick={handleDelete}>Remove</Button>
        </ContactItems>
    );
}
    ContactItem.propTypes = {
        contact: PropTypes.object.isRequired,
        deleteContact: PropTypes.func.isRequired,
};
    
    export default ContactItem