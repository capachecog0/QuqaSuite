import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'reactstrap';
import IPuntoMuestreo from '../../models/PuntoMuestreo';


interface IPuntoMuestreoNavParams {
  id: string,
  idPunto: string
}


export default function PuntoMuestreo() {
  const { id, idPunto } = useParams<IPuntoMuestreoNavParams>()

  const cargaFinalizada = false;






  if (cargaFinalizada) {
    return (
      <Container>
        <span> mostrando estudio {id} y punto {idPunto}  </span>
      </Container>
    );
  }
  else {
    return (<Spinner color="primary" />)
  }

  
}