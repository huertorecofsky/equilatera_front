import React from 'react';
class PreguntaOpciones extends React.Component {
    constructor(props) {
      super(props);
      this.opcionSeleccionada = this.opcionSeleccionada.bind(this)
    }
    opcionSeleccionada(event) {
     
      console.log(this)
    }
    
    render() {
      return (
       <div>
           <p>Me siento identificado con el género</p>
          <select onChange={this.opcionSeleccionada}>
            <option value="" >seleccionar</option>
            <option value="f" >femenino</option>
            <option value="m" >masculino</option>
            <option value="nb" >no binario</option>
            <option value="nd" >prefiero no decirlo</option>
           </select>
       </div>
     ) 
   }
  }

  export default PreguntaOpciones