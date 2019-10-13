import React from 'react';

class PreguntaTexto extends React.Component {
    constructor(props) {
        super(props);
        this.respuesta = this.respuesta.bind(this)
    }
    respuesta(event) {
        console.log(this)
    }

    render() {
        return (
            <div>
                <p>¿Cuáles?</p>
                <textarea onChange={this.respuesta} />
                &nbsp;
                <br />
                <button>siguiente</button>
            </div>
        )
    }
}

export default PreguntaTexto