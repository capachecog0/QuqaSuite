import React from 'react';
import { useParams } from 'react-router-dom';

interface IDatosEstudioParams {
  id: string
}

export default function DatosEstudio() {
  const params = useParams<IDatosEstudioParams>();

  return <span> Mostrando el estudio con id {params.id} </span>  
}