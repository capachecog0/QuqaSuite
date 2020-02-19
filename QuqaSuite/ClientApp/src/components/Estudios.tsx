import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import IEstudio from '../models/IEstudio';
import getGateway from '../api/ApiGateway';


export default function Estudios() {
  const [listaEstudios, actualizarListaEstudios] = useState<IEstudio[]>([]);

  useEffect(() => {
    async function obtenerDatos() {
      const estudios = await getGateway().estudios.getAll();      
      actualizarListaEstudios(estudios);
    }
    obtenerDatos();
  }, []);


  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          Quqa Suite
        </CardTitle>
        <CardText>
          Bienvenid@ a Quqa, por favor seleccione el estudio en el que desa trabajar
        </CardText>
      </CardBody>  
      <ListGroup>
        {listaEstudios.map(estudio => (
          <ListGroupItem key={estudio.nombreEstudio} tag={Link} to={`/estudios/${estudio.id}`}>{estudio.nombreEstudio}</ListGroupItem>
        ))}
      </ListGroup>
      <CardBody>
        <Button tag="a" href="#">Crear nuevo estudio</Button>
      </CardBody>
    </Card>
  );
}