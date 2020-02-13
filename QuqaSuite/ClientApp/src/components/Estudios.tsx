import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

interface IEstudio {
  id: number
  nombreEstudio: string;
  descripcion: string;
}

export default function Estudios() {
  const [listaEstudios, actualizarListaEstudios] = useState<IEstudio[]>([]);

  useEffect(() => {
    async function obtenerDatos() {
      const response = await Axios.get<IEstudio[]>("/api/Estudios");
      actualizarListaEstudios(response.data);
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
          <ListGroupItem key={estudio.nombreEstudio} tag="a" href="#">{estudio.nombreEstudio}</ListGroupItem>
        ))}
      </ListGroup>
      <CardBody>
        <Button tag="a" href="#">Crear nuevo estudio</Button>
      </CardBody>
    </Card>
  );
}