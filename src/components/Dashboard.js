import React from 'react';

function Linea({ nombre, link }) {
  return (
    <div>
      {nombre}
      <a href = {link}>Abrir</a>
    </div>
  )
}
function Dashboard() {
  const [nombre, setNombre] = React.useState("")
  const [comps, setComps] = React.useState([])
  React.useEffect(() => {
    const promesa = fetch("https://equilatera-ong.free.beeceptor.com/organizaciones")
    const respuesta = promesa.then((respuesta) => respuesta.json())
    respuesta.then((compañias) => setComps(compañias))

  }, [])

  return (
    <div>
      {comps.map((compañia) => (
        <Linea nombre={compañia.nombre} link={compañia.link}
        />
      ))}
      <form onSubmit={(event) => {
        const compañia = {
          nombre: nombre, link : "http://google.com" 
        }
        setComps([...comps, compañia])
        event.preventDefault()
        setNombre("")
      }}>
        <input value={nombre}
          onChange={(event) => setNombre(event.target.value)}

        />
        <button type="submit">
          Agregar
      </button>
      </form>
    </div>
  );
}

export default Dashboard;
