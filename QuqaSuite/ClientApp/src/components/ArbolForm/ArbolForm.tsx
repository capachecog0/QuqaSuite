import React, { Component } from "react";
import { InjectedFormikProps, FormikProps, withFormik } from "formik";
import { ArbolViewModel } from "./ArbolViewModel";
import { Pagination, ButtonGroup, Button } from "reactstrap";
import { DatosArbolForm } from "./DatosGenerales";
import MedicionesArbol, { TreeMeasurementLines } from "./MedicionesArbol";
import ResultadosArbol from "./ResultadosArbol";
import { RouteProps, RouteComponentProps } from "react-router-dom";

enum PasoFormulario {
  DatosArbol = 0,
  Mediciones,
  Resultado
}

interface IRouteParams {
  id: string,
  idPunto: string
}

type Props = FormikProps<ArbolViewModel> & RouteComponentProps<IRouteParams>;

interface IState {
  pasoActual: PasoFormulario;
}

class ArbolForm extends Component<Props, IState> {
  public state: IState = {
    pasoActual: PasoFormulario.DatosArbol
  };

  private irAtras = () => {
    this.setState(prevState => ({
      pasoActual: prevState.pasoActual - 1
    }));
  };

  private irAdelante = () => {
    this.setState(prevState => ({
      pasoActual: prevState.pasoActual + 1
    }));
  };  

  public render() {
    return (
      <>
        <h3>Registro de Arbol</h3>
        <form>
          {this.state.pasoActual === PasoFormulario.DatosArbol && (
            <DatosArbolForm {...this.props} />
          )}
          {this.state.pasoActual === PasoFormulario.Mediciones && (
            <MedicionesArbol 
              fotoArbol={this.props.values.fotografia}
              onMeasurementComplete={this.calculateResults}
              {...this.props}
            />
          )}
          {this.state.pasoActual === PasoFormulario.Resultado && (
            <ResultadosArbol { ...this.props }>Paso 3: Resultados</ResultadosArbol>
          )} 

          <hr />

          <ButtonGroup>
            <Button 
              disabled={this.state.pasoActual === 0}
              onClick={this.irAtras}>
              Anterior
            </Button>
            <Button 
              disabled={this.state.pasoActual === PasoFormulario.Resultado}
              onClick={this.irAdelante}>
              Siguiente
            </Button>
          </ButtonGroup>
        </form>
      </>
    );
  }

  private calculateResults = (measurements: TreeMeasurementLines) => {
    const { top, base, rod, dbhLeft, dbhRight } = measurements;
    const { alturaVara: rodHeight, especie } = this.props.values;

    const rodPxHeight = base - rod;

    const heightPx = base - top;
    const height = (heightPx * rodHeight) / rodPxHeight;

    const dbhPx = dbhRight - dbhLeft;
    const dbh = (dbhPx * rodHeight) / rodPxHeight;

    const biomass = especie.formulaBiomasa(dbh, height);

    this.props.setFieldValue("altura", height);
    this.props.setFieldValue("dap", dbh);
    this.props.setFieldValue("biomasa", biomass);
  };
}

export default withFormik<RouteComponentProps<IRouteParams>, ArbolViewModel>({
  handleSubmit: () => {}
})(ArbolForm);





