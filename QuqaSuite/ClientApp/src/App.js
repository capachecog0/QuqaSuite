import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Estudios from './components/Estudios';

import './custom.css'
import DatosEstudio from './components/DatosEstudio';
import ArbolForm from './components/ArbolForm';
import PuntoMuestreo from './components/PuntoMuestreo/PuntoMuestreo';
import EspeciesHome from './components/Especies/EspeciesHome';
import EspeciesForm from './components/Especies/EspecieForm';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />

        <Route exact path='/estudios' component={Estudios} />
        <Route exact path='/estudios/:id' component={DatosEstudio} />
        <Route exact path='/estudios/:id/puntos/:idPunto' component={ PuntoMuestreo } />
        <Route exact path="/estudios/:id/puntos/:idPunto/registrar-especimen" component={ArbolForm} />
        <Route exact path='/especies' component={EspeciesHome} />
        <Route exact path='/especies/agregar' component={EspeciesForm} />

        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
