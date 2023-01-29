import React from "react";
import { useDispatch } from "react-redux"
import {enviarForm } from "../../redux/actions/actions"

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(enviarForm(form))
  }

  return (
    <div className="contactBg">
      <input name="nombre" value={form.nombre} onChange={handleInput}></input>
      <input name="email" value={form.email} onChange={handleInput}></input>
      <input name="asunto" value={form.asunto} onChange={handleInput}></input>
      <input name="mensaje" value={form.mensaje} onChange={handleInput}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
