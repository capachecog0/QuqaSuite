import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';

interface IDatosEstudioParams {
  id: string
}

interface IEstudio {
  nombre: string;
  descripcion: string | null;
  numeroEspecimenes: number;
  areaMedicion: number;
}

const estudioMock: IEstudio = {
  nombre: 'Achumani',
  descripcion: "Estudio del area de Achumani Central",
  numeroEspecimenes: 45,
  areaMedicion: 3000
}

export default function DatosEstudio() {
  const params = useParams<IDatosEstudioParams>();

  return (
    <>    
      <Estudio id={parseInt(params.id)} {...estudioMock} ></Estudio> 
    </>
  );
}

type EstudioProps = IEstudio & { id: number }

function Estudio({ id, nombre, descripcion, numeroEspecimenes, areaMedicion }: EstudioProps) {
  
  return (
    <Container>
      <h2>Estudio: {nombre} <br /> <small>{descripcion}</small> </h2>
      <dl className="row">
        <dt className="col-sm-3">Especimenes</dt><dd className="col-sm-9">{numeroEspecimenes}</dd>
        <dt className="col-sm-3">Area de Medicion</dt><dd className="col-sm-9">{areaMedicion} ha.</dd>
      </dl>
      <Row>
        <Col md="6">
          <Card>
            <CardHeader>
              Continuar Estudio
            </CardHeader>
            <ListGroup>
              <ListGroupItem tag={Link} action color="info" to={`${id}/registrar-especimen`}>
                Agregar espécimen
              </ListGroupItem>
              <ListGroupItem tag ="button" action color="info">
                Explorar especímenes registrados
              </ListGroupItem>
            </ListGroup>              
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              Finalizar Estudio
            </CardHeader>
            <ListGroup>
              <ListGroupItem tag="button" action color="success">
                Publicar
              </ListGroupItem>
              <ListGroupItem tag ="button" action color="danger">
                Eliminar
              </ListGroupItem>
            </ListGroup>              
          </Card>
        </Col>
      </Row>
    
    </Container>
  )
}