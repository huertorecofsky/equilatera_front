import React from 'react';
import PreguntaTexto from './PreguntaTexto'
import PreguntaOpciones from './PreguntaOpciones'
import PreguntaCerrada from './PreguntaCerrada'
const mock = [
  {
    descripcion: 'Me siento identificado con el género',
    tipo: 'opciones',
    opciones: [
      'Femenino',
      'Masculino',
      'No Binario',
      'Prefiero no Decirlo',
    ]
  },
  {
    descripcion: 'Pregunta 2',
    tipo: 'sino'
  }
]
class Cuestionario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: mock,
      preguntaActual: 0,
      respuestas: [],
    }

    this.irAtras = this.irAtras.bind(this);
    this.irSiguiente = this.irSiguiente.bind(this);
    this.responder = this.responder.bind(this);
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
      case "opciones":
        return (
          <PreguntaOpciones
            select="seleccionar"
            opciones={pregunta.opciones}
            respuesta={respuestaActual}
            onRespuesta={(respuesta) => this.responder(preguntaActual, respuesta)}
          />
        )
      case "sino":
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
    const { preguntas, preguntaActual } = this.state;
    const pregunta = preguntas[preguntaActual];

    return (
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
            <button name="Atrás" class="btnAtras" onClick={this.irAtras}>
              Atrás
            </button>
          ) : null}
          {preguntaActual < preguntas.length - 1 ? (
            <button name="Siguiente" class="btnPrimary-verde" onClick={this.irSiguiente}>
              Siguiente
            </button>
          ) : null}
        </div>
      </div>
    )
  }
}
export default Cuestionario
