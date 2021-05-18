import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle, Container } from "reactstrap";

export default function EspeciesHome() {
  return (
    <Card>
      <CardBody>
      <CardTitle tag='h5'>
        Catálogo de Especies
      </CardTitle>
      <CardText>
          Aquí se pueden registrar las especies estudiadas y sus ecuaciones de biomasa
      </CardText>
      </CardBody>
      <CardBody>
        <Button tag={Link} to={`/Especies/Agregar`} action >Agregar Especie</Button>
      </CardBody>
    </Card>
  );
}