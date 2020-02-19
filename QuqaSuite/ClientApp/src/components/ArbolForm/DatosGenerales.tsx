import React, { Component } from "react";
import { ArbolViewModel } from "./ArbolViewModel";
import { FormikProps } from "formik";
import IMacrodistrito from "../../models/IMacrodistrito";
import { Especie } from "../../models/Especie";
import { FormGroup, Label, Input, InputGroupAddon, InputGroupText, InputGroup, CustomInput } from "reactstrap";
import getApiGateway from "../../api/ApiGateway"

type DatosArbol = Pick<
  ArbolViewModel,
  | "macrodistrito"
  | "distrito"
  | "barrio"
  | "especie"
  | "alturaVara"
  | "fotografia"
>;

type Props = FormikProps<ArbolViewModel> & {
  setValid?: (valid: boolean) => void;
};

type State = {
  macrodistritos: IMacrodistrito[];
  distritos: IMacrodistrito["distritos"];
  zonas: string[];
  especies: Especie[];
};

export class DatosArbolForm extends Component<Props, State> {
  public state: State = {
    macrodistritos: [],
    distritos: [],
    zonas: [],
    especies: []
  }; 

  public render() {
    const { values, setFieldValue } = this.props;
    
    return (
      <> 
        <h3>Datos del Espécimen</h3>
        <FormGroup>
          <Label for="select-macrodistrito">Macrodistrito</Label>
          <Input 
            value={ values.macrodistrito } 
            onChange={ this.handleMacroDistritoChange }
            type="select" name="macrodistrito" id="select-macrodistrito">
            {this.state.macrodistritos.map(m => <option id={m.nombre}>{m.nombre}</option>)}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="select-distrito">distrito</Label>
          <Input 
            value={values.distrito}
            onChange={this.handleDistritoChange}  
            type="select" name="distrito" id="select-distrito">
            {this.state.distritos.map(m => <option id={m.numero.toString()}>{m.numero}</option>)}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="select-barrio">Barrio/Zona</Label>
          <Input 
            value={values.barrio}
            onChange={event => setFieldValue("barrio", event.target.value)}  
            type="select" name="barrio" id="select-barrio">
            {this.state.zonas.map(z => <option id={z}>{z}</option>)}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="select-especie">Especie</Label>
          <Input 
            value={values.especie?.nombreCientifico}
            onChange={this.handleEspecieChange}  
            type="select" name="especie" id="select-especie">
            {this.state.especies.map(e => (
              <option value={e.nombreCientifico} id={e.nombreCientifico}>
                {`${e.nombreCientifico} - ${e.nombreComun}`}
              </option>))}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="txt-alturaVara">Altura Vara</Label>    
          <InputGroup>
            <Input
              value={values.alturaVara} 
              onChange={event => setFieldValue("alturaVara", event.target.value)}
              type="number" name="alturaVara" id="txt-alturaVara" 
            />     
            <InputGroupAddon addonType="append">
              <InputGroupText>cm</InputGroupText>
            </InputGroupAddon>     
          </InputGroup>  
        </FormGroup>
          <Label>Fotografía</Label>
          <CustomInput 
            valid={values.fotografia ? true : undefined}
            accept="image/*"
            type="file" id="file-fotografia" name="fotografia" 
            label={values.fotografia ? "Cambiar Archivo" : "Seleccionar Archivo"}
            onChange={event => {
              if(event.currentTarget.files && event.currentTarget.files[0]) {
                setFieldValue("fotografia", event.currentTarget.files![0]);
              }
            }}
          />        
      </>
    )
  }

  public async componentDidMount() {
    const macrodistritos = await getApiGateway().macrodistritos.getAll();
    const especies = Especie.lista;
    this.setState({
      macrodistritos,
      especies
    });
    
    const { macrodistrito, distrito, barrio } = this.props.values;

    const defaultMacrodistrito = macrodistrito 
      ? macrodistritos.find(m => m.nombre === macrodistrito)! 
      : macrodistritos[0];

    const defaultDistrito = distrito  
      ? defaultMacrodistrito.distritos.find(d => d.numero.toString() === distrito)!
      : defaultMacrodistrito.distritos[0];

    const defaultZona = barrio || defaultDistrito.zonas[0];

    this.props.setFieldValue("macrodistrito", defaultMacrodistrito.nombre);
    this.updateDistritos(defaultMacrodistrito.nombre);
    this.props.setFieldValue("distrito", defaultDistrito.numero.toString());
    this.updateZonas(defaultDistrito.numero);
    this.props.setFieldValue("barrio", defaultZona);
    this.props.setFieldValue("especie", especies[0]);

    this.props.setFieldValue("alturaVara", 150);
  }

  private handleMacroDistritoChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (event) => {
    const value = event.target.value;
    this.props.setFieldValue("macrodistrito", value);    
    this.updateDistritos(value);  
  }

  private updateDistritos = (nombreMacroDistrito: string) => {
    this.setState(({ macrodistritos }) => {
      const selectedMacro = macrodistritos.filter(
        md => md.nombre === nombreMacroDistrito
      )[0];
      this.props.setFieldValue("distrito", selectedMacro.distritos[0].numero.toString());
      this.updateZonas(selectedMacro.distritos[0].numero);
      return {
        distritos: selectedMacro.distritos
      };      
    });
  }

  private handleDistritoChange : React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (event) => {
    const value = event.target.value;
    this.props.setFieldValue("distrito", value);
    this.updateZonas(parseInt(value));
  }

  private updateZonas = (numeroDistrito: number) => {
    this.setState(({ distritos }) => {
      const selectedDist = distritos.filter(
        md => md.numero === numeroDistrito
      )[0];
      this.props.setFieldValue("barrio", selectedDist.zonas[0])
      return {
        zonas: selectedDist.zonas
      };
    });
  }

  private handleEspecieChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (event) => {
    const value = event.target.value;
    const especie = this.state.especies.find(e => e.nombreCientifico === value);
    this.props.setFieldValue("especie", especie);
  }
}
