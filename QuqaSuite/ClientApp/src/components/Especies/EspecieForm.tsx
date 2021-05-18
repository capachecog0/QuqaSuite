import { FormikProps, withFormik } from 'formik';
import * as math from 'mathjs';
import React, { useState, useEffect, Component } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { EspecieDto } from '../../models/EspecieDto';



type Props = FormikProps<EspecieDto>;
interface IState {
  formulaValida: boolean | null;
}

class EspecieForm extends Component<Props, IState> {

  constructor(props: Props) {
    super(props);
    this.state = { formulaValida: null };
      
  }
  
  public render() {
    const { values, setFieldValue } = this.props

    return (
      <>
        <h3>Registro de Especie</h3>
        <Form>
          <FormGroup>
            <Label> Nombre Cientifico </Label>
            <Input
              value={values.nombreCientifico}
              onChange={event => setFieldValue('nombreCientifico', event.target.value)}
              name='NombreCientifico' id='txt-nombreCientifico'
              />
          </FormGroup>

          <FormGroup>
            <Label> Nombre Común </Label>
            <Input
              value={values.nombreComun}
              onChange={event => setFieldValue('nombreComun', event.target.value)}
              name='NombreComun' id='txt-nombreComun'
            />
          </FormGroup>

          <FormGroup>
            <Label> Formula de biomasa </Label>
            <InputGroup>
              
              <Input
                value={values.formulaBiomasa}
                onChange={event => setFieldValue('formulaBiomasa', event.target.value)}
                name='formulaBiomasa' id='txt-formulaBiomasa'
              />
              <InputGroupAddon addonType="append">
                <Button onClick={this.validarFormula} type='button'>Validar</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <Button disabled={this.state.formulaValida || false} type="button">Completar Registro</Button>
        </Form>

        {this.state.formulaValida === null ? 'Aun no validado' : 'Ya validado'}
        <span />
        Es valido? {this.state.formulaValida ? 'si' : 'no'}

     </>
    );
    
  }

  private validarFormula = () => {
    try {
      const formula = math.evaluate(this.props.values.formulaBiomasa, { h: 600, dap: 21 });
      this.setState({ formulaValida: true });

    } catch (ex) {
      this.setState({ formulaValida: false })
    }
  }

}

export default withFormik<{}, EspecieDto>({ handleSubmit: () => { } })(EspecieForm);