import React from "react";
import Botones from "./Botones";

const studentName = "Rami";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  let resultado = techSkills.map((elemento) => (
    <li key={elemento}>{elemento}</li>
  ))
  return (
    <div>
      <h1>Mi primer componente</h1>
      <h3>{studentName}</h3>
      <ul>
        {resultado}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
