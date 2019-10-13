import React from 'react';
class PreguntaOpciones extends React.Component {
  renderOpciones(opciones) {
    const opcionesJSX = [];

    for (let i = 0; i < opciones.length; i++) {
      opcionesJSX.push(
        <button className="btn">{opciones[i]}</button>
      );
    }

    return opcionesJSX;
  }

  render() {
    const { opciones, respuesta, onRespuesta } = this.props;

    return (
      <div className="btn-group-verticales">
        {opciones.map((opcion) => (
          <button
            key={opcion}
            className={`btn-opcion ${respuesta === opcion ? 'btn-activo' : ''}`}
            onClick={() => onRespuesta(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>
    )
  }
}

export default PreguntaOpciones
