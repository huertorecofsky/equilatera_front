import React from 'react';
import PreguntaTexto from './PreguntaTexto'
import PreguntaOpciones from './PreguntaOpciones'
import PreguntaCerrada from './PreguntaCerrada'
const mock = [
    {
        descripcion: 'Pregunta 1',
        tipo: 'sino'
    },
    {
        descripcion: 'Pregunta 2',
        tipo: 'texto'
    }
]
class Cuestionario extends React.Component{
  constructor(props){
  super(props);
        this.state = {
            preguntas: mock,
            preguntaActual: 0,
        }
    }
 
    renderTipoPregunta(tipo) {
        switch (tipo) {
            case "texto":
           return <PreguntaTexto button="siguiente"/>
            case "opciones":
           return <PreguntaOpciones select="seleccionar"/>
            case "cerrada":
           return <PreguntaCerrada input type="radio"/>

        }
    }
  render(){
      const pregunta = this.state.preguntas[this.state.preguntaActual]
      return(
    <div>
        {pregunta.descripcion}
        {this.renderTipoPregunta()}
      
      
      
      
    </div>
      )
  }
 }
  export default Cuestionario