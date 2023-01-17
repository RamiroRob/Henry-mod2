import React from "react";
import "./Contact.modules.css";
import { useState } from 'react'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs) {

  let errors = {}

  if (!inputs.name) errors.name = "Se requiere un nombre"
  if (!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico"
  if (inputs.phone < 0) errors.phone = "Sólo números positivos"
  if (!inputs.subject) errors.subject= "Se requiere un asunto"
  if (!inputs.message) errors.message= "Se requiere un mensaje"

  return errors
}



export default function Contact() {
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value
      })
    )
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const longitud = Object.keys(errors).length

    if (longitud === 0) {
      alert('Datos completos')
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: ''
      })

      setErrors(validate({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }))

  } else {

    alert("Debes corregir los errores")
  }
}
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input className={errors.name && 'warning'} value={inputs.name} onChange={handleChange} type="text" name="name" placeholder="Escribe tu nombre..."/>
      <p className='danger'>{errors.name}</p>
      <br/>

      <label htmlFor="email">Correo Electrónico:</label>      
      <input className={errors.email && 'warning'} value={inputs.email} onChange={handleChange} type="text" name="email" placeholder="Escribe tu email..."/>
      <p className='danger'>{errors.email}</p>
      <br/>

      <label htmlFor="phone">Teléfono:</label>
      <input className={errors.phone && 'warning'} value={inputs.phone} onChange={handleChange} type="number" name="phone" placeholder="Escribe un teléfono..."/>
      <p className='danger'>{errors.phone}</p>
      <br/>

      <label htmlFor="subject">Asunto:</label>
      <input className={errors.subject && 'warning'} value={inputs.subject} onChange={handleChange} type="text" name="subject" placeholder="Escribe el asunto..."/>
      <p className='danger'>{errors.subject}</p>
      <br/>

      <label htmlFor="message">Mensaje:</label>
      <textarea className={errors.message && 'warning'} value={inputs.message} onChange={handleChange} type="text" name="message" placeholder="Escribe tu mensaje..."/>
      <p className='danger'>{errors.message}</p>
      <br/>

      <button type="submit">Enviar</button>
    </form>
  </div>);
}
