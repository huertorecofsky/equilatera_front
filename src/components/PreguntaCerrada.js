import React from 'react';

class PreguntaCerrada extends React.Component {
  render() {
    const { respuesta, onRespuesta } = this.props;

    return (
      <div className="Si-No">
        <button
          className={`btn-si ${respuesta === 'Si' ? 'btn-activo' : ''}`}
          onClick={() => onRespuesta('Si')}
        >
          Si
        </button>
        <button
          className={`btn-no ${respuesta === 'No' ? 'btn-activo' : ''}`}
          onClick={() => onRespuesta('No')}
        >
          No
        </button>
      </div>
    )
  }
}
export default PreguntaCerrada
