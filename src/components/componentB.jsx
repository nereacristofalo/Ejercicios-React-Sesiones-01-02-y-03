import React from 'react';
import { Contact } from '../models/contact.class';
import PropTypes from 'prop-types';

const ComponentB = ({ contact }) => {
  return (
    <div>
      <h1>
        {contact.name} {contact.lastName}
      </h1>
      <h3>{contact.email}</h3>
      <h3>
        {contact.isOnline ? 'Contacto en linea' : 'Contacto no disponible'}
      </h3>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
