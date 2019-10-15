import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cuestionario from './components/Cuestionario'
import CuestionarioComenzar from './components/CuestionarioComenzar';
import CuestionarioCompletado from './components/CuestionarioCompletado';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/:tipo/:uuid/comenzar" component={CuestionarioComenzar} />
          <Route path="/:tipo/:uuid/completado" component={CuestionarioCompletado} />
          <Route path="/:tipo/:uuid" component={Cuestionario} />
          <Route>
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
