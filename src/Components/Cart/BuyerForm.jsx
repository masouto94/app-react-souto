import React from 'react'
import { useState } from 'react';



const BuyerForm = ({change,submit}) => {
    

  return (
    <>
    <div>
      <label>
        Nombre
        <input name="nombre" id="name"  onChange={change} />
      </label>
      <br />
      <label>
        Apellido
        <input name="apellido" id="surname" onChange={change} />
      </label>
      <br />      <label>
        Correo electrónico
        <input name="email" id="email" onChange={change} />
      </label>
      <br />      <label>
        Teléfono
        <input name="telefono" id="phone" onChange={change} />
      </label>
      <br />
      <button className="btn btn-outline-primary btn-block" onClick={submit}>Confirmar Datos</button>
      </div>
    </>
  );
}

export default BuyerForm
