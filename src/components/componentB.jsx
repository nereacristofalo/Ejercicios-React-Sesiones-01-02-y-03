import React from 'react';

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

export default ComponentB;
