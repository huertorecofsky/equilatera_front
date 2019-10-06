import React from 'react';

function Linea ({ nombre, link }) {
  return (
    <div>
      {nombre}
      {link}
    </div>
  )
}
function Dashboard() {
  const [nombre, setNombre] = React.useState("")
  const [comps, setComps] = React.useState ([])

  return (
    <div>
       {comps.map ((compañia) => (
        <Linea nombre = {compañia.nombre} link = {compañia.link}
             /> 
        ))}
        <form onSubmit = {(event)=> {
          const compañia = {
            nombre:nombre, link: "http://google.com"
          } 
          setComps ([...comps, compañia])
          event.preventDefault()
          setNombre ("")
        }}>
      <input value={nombre}
        onChange = {(event) => setNombre (event.target.value)}
           
             />
      <button type = "submit">
        Agregar
      </button>
      </form>
    </div>
  );
}

export default Dashboard;
