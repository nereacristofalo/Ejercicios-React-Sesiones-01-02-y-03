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
        'Nerea',
        'Cristofalo',
        'nmcristofalo@gmail.com',
        !myContact.isOnline
      )
    );
    // setContact((prevContact) => ({
    //   ...prevContact,
    //   isOnline: !prevContact.isOnline,
    // }));
    // setContact((prevContact) => ({
    //   name: prevContact.name,
    //   lastName: prevContact.lastName,
    //   email: prevContact.email,
    //   isOnline: !prevContact.isOnline,
    // }));
  };

  return (
    <div>
      <ComponentB contact={myContact}></ComponentB>
      <button onClick={cambioDeEstado}> CAMBIAR ESTADO </button>
    </div>
  );
};

export default ComponentA;
