import React, { useState } from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from './componentB';

const ComponentA = () => {
  const [myContact, setContact] = useState(
    new Contact('Nerea', 'Cristofalo', 'nmcristofalo@gmail.com', false)
  );

  const cambioDeEstado = () => {
    setContact(
      new Contact(
        myContact.name,
        myContact.lastName,
        myContact.email,
        !myContact.isOnline
      )
    );
  };

  return (
    <div>
      <ComponentB contact={myContact}></ComponentB>
      <button onClick={cambioDeEstado}> CAMBIAR ESTADO </button>
    </div>
  );
};

export default ComponentA;
