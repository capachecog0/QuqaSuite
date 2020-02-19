import React, { Component } from "react";

import { FormikProps } from "formik";

import { ArbolViewModel } from "./ArbolViewModel";
import { Button } from "reactstrap";
import Axios from "axios";


type ResultadosArbolProps = FormikProps<ArbolViewModel> 

export default class ResultadosArbol extends Component<ResultadosArbolProps> {
  public render() {
    return (
      <> 
        <h3> Resultados de la medicion </h3>
          <dl className="row">
            <dt className="col-sm-3">Altura</dt>
            <dd className="col-sm-9">{Math.round(this.props.values.altura)} cm</dd>
            <dt className="col-sm-3">DAP</dt>
            <dd className="col-sm-9">{Math.round(this.props.values.dap)} cm</dd>
            <dt className="col-sm-3">Biomasa Almacenada</dt>
            <dd className="col-sm-9">{Math.round(this.props.values.biomasa)} Kg</dd>
          </dl>
          <Button color="primary" onClick={this.registrarArbol}>Completar Registro</Button>
      </>
    )   
  }

  private registrarArbol = async() => {
    const reader = new FileReader();
    reader.onload = async () => {
      const foto = reader.result;

      const arbol = this.props.values;
      const arbolUpload = {
        ...arbol,
        fotografiaArbol: {
          dataUrl: reader.result
        }
      }

      

      const result = await Axios.post("/api/estudios/1/arboles", arbolUpload);
      alert("Especimen registrado exitosamente");
      window.history.back();
    }  

    reader.readAsDataURL(this.props.values.fotografia);   
    
    
  }
}
