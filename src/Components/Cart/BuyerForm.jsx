import React from 'react'
import { useState } from 'react';



const BuyerForm = ({change,submit}) => {
    

  return (
    <>
    <div className="formularioContacto">
      <label>
        Nombre
        <input name="nombre" id="name"  onChange={change} />
      </label>
      
      <label>
        Apellido
        <input name="apellido" id="surname" onChange={change} />
      </label>
            <label>
        Correo electrónico
        <input name="email" id="email" onChange={change} />
      </label>
            <label>
        Teléfono
        <input name="telefono" id="phone" onChange={change} />
      </label>
      
      <button className="btn btn-outline-primary btn-block" onClick={submit}>Confirmar Datos</button>
      </div>
    </>
  );
}

export default BuyerForm
