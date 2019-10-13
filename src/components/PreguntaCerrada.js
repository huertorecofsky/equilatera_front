import React from 'react';

class PreguntaCerrada extends React.Component {
    constructor(props) {
      super(props);
    this.opcionElegida = this.opcionElegida.bind(this)
  }
  opcionElegida(event) {
   
    console.log(this)
  }
render() {
    return (
 <div>
     <p>Conoces los valores de la cultura organizacional?</p>
     <input onChange={this.opcionElegida}/>
     <input type="radio"/> Sí
     <input type="radio"/> No
 </div>
 )
}
}
export default PreguntaCerrada