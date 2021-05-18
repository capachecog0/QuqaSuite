import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, ModalFooter, Button, Table } from 'reactstrap';
import getGateway from '../api/ApiGateway';
import IEstudio from '../models/IEstudio';
import IDetallesEstudio from '../models/DetallesEstudio';
import Axios from 'axios';

interface IDatosEstudioParams {
  id: string
}

export default function DatosEstudio() {
  return (
    <>
      {<Estudio></Estudio>}
    </>
  );
}

type EstudioProps = {}

function Estudio({ }: EstudioProps) {

  const [modalNuevoPunto, setModalNuevoPunto] = useState(false);
  const alternarModalNuevoPunto = () => setModalNuevoPunto(!modalNuevoPunto);

  const [nombrePunto, setNombrePunto] = useState('');

  const params = useParams<IDatosEstudioParams>();
  const id = parseInt(params.id);

  const [datosEstudio, actualizarDatosEstudio] = useState<IDetallesEstudio>();

  async function obtenerDatos() {
    const estudio = await getGateway().estudios.find(id);
    actualizarDatosEstudio(estudio);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);

  if (datosEstudio) {
    const { id: estudioId, nombreEstudio, descripcion, superficieTotal, puntosMuestreo } = datosEstudio;

    const registrarPunto = async () => {
      await Axios.post(`/api/estudios/${estudioId}/puntos`, { nombre: nombrePunto });
      setModalNuevoPunto(false);
      obtenerDatos();
    }

    return (
      <Container>
        <h2>Estudio: {nombreEstudio} <br /> <small>{descripcion}</small> </h2>
        <dl className="row">
          <dt className="col-sm-3">Puntos de Muestreo</dt><dd className="col-sm-9">{puntosMuestreo.length}</dd>
          <dt className="col-sm-3">Area de Medicion</dt><dd className="col-sm-9">{superficieTotal} ha.</dd>
        </dl>
        <Modal isOpen={modalNuevoPunto} toggle={alternarModalNuevoPunto}>
          <ModalHeader toggle={alternarModalNuevoPunto}>
            Agregar Nuevo Punto de Muestreo
        </ModalHeader>
          <ModalBody>
            <form>
              <FormGroup>
                <Label>
                  Nombre del Punto
              </Label>
                <Input value={nombrePunto}
                  onChange={e => setNombrePunto(e.target.value)}
                  name="nombrePunto" id="txt-nombre-punto" />
              </FormGroup>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={registrarPunto}>Registrar</Button>{' '}
            <Button color="secondary" onClick={alternarModalNuevoPunto}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                Continuar Estudio
            </CardHeader>
              <ListGroup>
                <ListGroupItem tag={Button} action color="info" onClick={alternarModalNuevoPunto}>
                  Agregar punto de muestreo
              </ListGroupItem>
                <ListGroupItem tag="button" action color="info">
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
                <ListGroupItem tag="button" action color="danger">
                  Eliminar
              </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row>
          <h3> Puntos de Muestreo </h3>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Especímenes</th>
                <th>Biomasa Total</th>
              </tr>
            </thead>
            <tbody>
              {puntosMuestreo.map(p => (
                <tr>
                  <td>{p.numero}</td>
                  <td>
                    <Button tag={Link} color="link" to={`${estudioId}/puntos/${p.id}`}>  {p.nombre} </Button>
                  </td>
                  <td>{p.especimenes.length}</td>
                  <td>{p.especimenes.reduce((prev, e) => prev + Math.round(e.biomasa), 0)} Kg</td>
                  <td>
                    <Button tag={Link} color="link" to={`${estudioId}/puntos/${p.id}/registrar-especimen`}>Agregar Espécimen</Button>                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>

      </Container>
    )
  }
  else {
    return <div />
  }
}