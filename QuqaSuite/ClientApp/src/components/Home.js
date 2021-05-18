import React, { Component } from 'react';

import { useParams } from "react-router";
import { Route, Link } from 'react-router-dom';

export class Home extends Component {
 static displayName = Home.name;

 render () {
   return (
     <div>
       <h1>QUQA SUITE</h1>
       <p>Bienvenido a Quqa Suite, app para estimacion de biomasa en Arboles Urbanos </p>       
     </div>
   );
 }
}
