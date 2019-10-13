import React from 'react';
import { Link } from 'react-router-dom';

const CuestionarioComenzar = ({ match: { params }}) => (
  <div className="container-formulario">
    <div className="seccion-uno">
      <img src="https://i.ibb.co/9GYQ2Fw/Logo-equilatera.jpg" class="logo-formulario" alt="Logo-equilatera" border="0"/>
    </div>
    <div className="seccion-dos-form">
      <div className="caja-texto">
        <h3>
          Termómetro de Buenas Prácticas en tu organización
        </h3>
        <p>
          Las buenas prácticas constituyen acciones e iniciativas para con las personas que trabajan en una
          empresa que sobrepasan los requerimientos que establece la legislación laboral.
        </p>
        <p>
          Las mismas se aplican en cuatro dimensiones:
          Recursos Humanos, Conciliación vida laboral, personal y familiar,
          Ambiente laboral y Compromiso, participación y difusión.
        </p>
      </div>
    </div>
    <div className="seccion-tres-btn-comenzar">
      <Link
        className="btnPrimary"
        to={`/${params.tipo}/${params.uuid}/`}
      >
        Comenzar
      </Link>
    </div>
  </div>
);

export default CuestionarioComenzar;
