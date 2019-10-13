import React from 'react';

class PreguntaTexto extends React.Component {
  render() {
    const { respuesta, onRespuesta } = this.props;

    return (
      <textarea
        className="respuesta-texto"
        value={respuesta}
        onChange={(event) => onRespuesta(event.target.value)}
      />
    )
  }
}

export default PreguntaTexto
