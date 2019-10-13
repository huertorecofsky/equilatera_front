import React from 'react';
import { Link } from 'react-router-dom';

function Linea({ nombre, uuid }) {
  return (
    <div className="contenedor-lista">
      <div className="compania-nombre">{nombre}</div>
      <div className="compania-acciones">
        <Link
          className="btn-abrir"
          to={`/empleado/${uuid}/comenzar`}
        >
          Empleade
        </Link>
        <Link
          className="btn-abrir"
          to={`/rrhh/${uuid}/comenzar`}
        >
          RRHH
        </Link>
      </div>
    </div>
  )
}

const ORGANIZACIONES_URL = 'http://localhost:8000/encuesta/api/organizaciones/';

function Dashboard() {
  const [nombre, setNombre] = React.useState("")
  const [comps, setComps] = React.useState([])
  React.useEffect(() => {
    const promesa = fetch(ORGANIZACIONES_URL)
    const respuesta = promesa.then((respuesta) => respuesta.json())
    respuesta.then((compañias) => setComps(compañias))
  }, [])

  const crearCompania = async (event) => {
    event.preventDefault();

    const respuesta = await fetch(ORGANIZACIONES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre }),
    });
    const compania = await respuesta.json();

    setComps([...comps, compania]);
    setNombre("");
  }

  return (
    <div className="tablero">
      <div>
        <img src="https://i.ibb.co/9GYQ2Fw/Logo-equilatera.jpg"
          className="logo-dashboard"
          alt="Logo-equilatera"
          border="0"
        />
      </div>
      <div className="companias">
        {comps.map((comp) => (
          <Linea nombre={comp.nombre} uuid={comp.uuid}
          />
        ))}
      </div>

      <form
        onSubmit={crearCompania}
        className="agregar-companias"
      >
        <input
          className="input nombre-compania"
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <button type="submit" name="Agregar" className="btn-agregar-compania">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
