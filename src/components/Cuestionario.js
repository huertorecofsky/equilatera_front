import React from 'react';
import PreguntaTexto from './PreguntaTexto'
import PreguntaOpciones from './PreguntaOpciones'
import PreguntaCerrada from './PreguntaCerrada'

class Cuestionario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: [],
      preguntaActual: 0,
      respuestas: [],
    }

    this.irAtras = this.irAtras.bind(this);
    this.irSiguiente = this.irSiguiente.bind(this);
    this.responder = this.responder.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/encuesta/api/preguntas/')
      .then((respuesta) => respuesta.json())
      .then((preguntas) => this.setState({ preguntas }));
  }

  irAtras() {
    const { preguntaActual } = this.state;
    this.setState({ preguntaActual: preguntaActual - 1 });
  }

  irSiguiente() {
    const { preguntaActual } = this.state;
    this.setState({ preguntaActual: preguntaActual + 1 });
  }

  responder(indicePregunta, opcion) {
    const { respuestas } = this.state;
    const nuevasRespuestas = [
      ...respuestas.slice(0, indicePregunta),
      opcion,
      ...respuestas.slice(indicePregunta + 1),
    ];

    this.setState({ respuestas: nuevasRespuestas });
  }

  renderTipoPregunta() {
    const { preguntas, respuestas, preguntaActual } = this.state;
    const pregunta = preguntas[preguntaActual];
    const respuestaActual = respuestas[preguntaActual];

    switch (pregunta.tipo) {
      case "texto":
        return (
          <PreguntaTexto
            button="siguiente"
            respuesta={respuestaActual}
            onRespuesta={(respuesta) => this.responder(preguntaActual, respuesta)}
          />
        );
      case "multiple":
        return (
          <PreguntaOpciones
            select="seleccionar"
            opciones={pregunta.opciones.split(',')}
            respuesta={respuestaActual}
            onRespuesta={(respuesta) => this.responder(preguntaActual, respuesta)}
          />
        )
      case "si_no":
        return (
          <PreguntaCerrada
            respuesta={respuestaActual}
            onRespuesta={(respuesta) => this.responder(preguntaActual, respuesta)}
          />
        );
      default:
        return null
    }
  }

  render() {
    const { preguntas, respuestas, preguntaActual } = this.state;
    const pregunta = preguntas[preguntaActual];
    const respuestaActual = respuestas[preguntaActual];

    return preguntas.length > 0 ? (
      <div className="container-formulario-violeta">
        <div className="seccion-uno-pregunta">
          <h3>
            {pregunta.descripcion}
          </h3>
        </div>
        <div className="seccion-dos-form">
          {this.renderTipoPregunta()}
        </div>
        <div className="seccion-tres-btn-siguiente">
          {preguntaActual > 0 ? (
            <button name="Atrás" className="btnAtras" onClick={this.irAtras}>
              Atrás
            </button>
          ) : null}
          {preguntaActual < preguntas.length - 1 ? (
            <button
              name="Siguiente"
              className="btnPrimary-verde"
              onClick={this.irSiguiente}
              disabled={respuestaActual == null}
            >
              Siguiente
            </button>
          ) : null}
        </div>
      </div>
    ) : null
  }
}
export default Cuestionario
