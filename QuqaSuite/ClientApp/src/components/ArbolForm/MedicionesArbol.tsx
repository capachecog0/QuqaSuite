import React, { Component } from "react";

import { FormikProps } from "formik";
import { MdRotateLeft, MdRotateRight } from "react-icons/md";

import { ArbolViewModel } from "./ArbolViewModel";
import { ButtonGroup, Button } from "reactstrap";

/**
 * Vertical coordinates in the canvas where the user marked the measuring points of a tree
 */
export interface TreeMeasurementLines {
  top: number;
  base: number;
  rod: number;
  dbhLeft: number;
  dbhRight: number;
}

type MedicionesArbolProps = FormikProps<ArbolViewModel> & {
  fotoArbol: File;
  onMeasurementComplete: (measurements: TreeMeasurementLines) => void;
};

interface MedicionesArbolState {
  measurementStage: keyof TreeMeasurementLines | null;
}

export default class MedicionesArbol extends Component<
  MedicionesArbolProps,
  MedicionesArbolState
> {
  private canvasRef = React.createRef<HTMLCanvasElement>();
  private canvasWrapperRef = React.createRef<HTMLDivElement>();

  private originalImage?: HTMLImageElement;
  private measurementLines: Partial<TreeMeasurementLines> = {};
  // Should only be 0, 90, 180 or 360
  private rotation: number = 0;

  public state: MedicionesArbolState = {
    measurementStage: null
  };
  
  public render() {   
    return (
      <div>
        <div>
        <button type="button" onClick={this.rotateLeft}>
            <MdRotateLeft />
          </button>
          <button type="button" onClick={this.rotateRight}>
            <MdRotateRight />
          </button>
        </div> 

        <ButtonGroup>
          <Button 
            color={this.state.measurementStage === "top" ? "primary" : "secondary"}
            type="button"
            onClick={this.toggleSelection("top")}>
              Seleccionar Punta
          </Button>
          <Button 
            color={this.state.measurementStage === "rod" ? "primary" : "secondary"}
            type="button"
            onClick={this.toggleSelection("rod")}>
              Seleccionar Vara
          </Button>
          <Button 
            color={this.state.measurementStage === "base" ? "primary" : "secondary"}
            type="button"
            onClick={this.toggleSelection("base")}>
              Seleccionar Base
          </Button>
          <Button 
            color={this.state.measurementStage === "dbhLeft" ? "primary" : "secondary"}
            type="button"
            onClick={this.toggleSelection("dbhLeft")}>
              Dap Izquiera
          </Button>
          <Button 
            color={this.state.measurementStage === "dbhRight" ? "primary" : "secondary"}
            type="button"
            onClick={this.toggleSelection("dbhRight")}>
              Dap Derecha
          </Button>
          
        </ButtonGroup>   

        <div ref={this.canvasWrapperRef} style={{ overflow: "scroll" }}>
          <canvas onClick={this.handleCanvasClick} ref={this.canvasRef} />
        </div>       
      </div>
    );
  }

  public componentDidMount() {
    if (this.props.fotoArbol.type.match("image.*")) {
      const reader = new FileReader();
      reader.readAsDataURL(this.props.fotoArbol);
      reader.onload = () => {
        if (reader.readyState === FileReader.DONE) {
          const image = new Image();
          image.src = reader.result as string;
          image.onload = () => {
            this.originalImage = image;
            this.redrawImageAndLines();
          };
        }
      };
    }
  }

  private handleCanvasClick: React.MouseEventHandler<
    HTMLCanvasElement
  > = ev => {
    const { measurementStage } = this.state;

    if (measurementStage === null) {
      return;
    }

    const [x, y] = this.getCursorPosition(ev.currentTarget, ev);
    const point =
      measurementStage === "dbhLeft" || measurementStage === "dbhRight" ? x : y;

    this.measurementLines[measurementStage] = point;

    this.redrawImageAndLines();
  };

  private redrawImageAndLines = () => {
    const canvas = this.canvasRef.current;
    if (canvas === null) {
      throw new Error("Cannot find canvas");
    }
    if (!this.originalImage) {
      throw new Error("Cannot load image into canvas");
    }

    let targetWidth = this.canvasWrapperRef.current!.clientWidth;

    const imageWidth = this.originalImage.naturalWidth;
    const imageHeight = this.originalImage.naturalWidth;
    const is90degreeTurn = this.rotation === 90 || this.rotation === 270;

    let targetHeight: number;
    if (is90degreeTurn) {
      targetHeight = (targetWidth * imageWidth) / imageHeight;
    } else {
      targetHeight = (targetWidth * imageHeight) / imageWidth;
    }

    // // if there is a 90 degree rotation, swap height and width of canvas
    // if (this.rotation === 90 || this.rotation === 270) {
    //   [targetHeight, targetWidth] = [targetWidth, targetHeight];
    // }

    canvas.height = targetHeight;
    canvas.width = targetWidth;

    const ctx = canvas.getContext("2d")!;

    ctx.save();
    ctx.clearRect(0, 0, targetWidth, targetHeight);

    ctx.translate(targetWidth / 2, targetHeight / 2);
    ctx.rotate((-this.rotation * Math.PI) / 180);
    ctx.drawImage(
      this.originalImage,
      -targetWidth / 2,
      -targetHeight / 2,
      targetWidth,
      targetHeight
    );
    ctx.restore();

    const { top, base, rod, dbhLeft, dbhRight } = this.measurementLines;

    if (top) {
      ctx.stroke(this.getVerticalLine(top, canvas.width));
    }

    if (base) {
      ctx.stroke(this.getVerticalLine(base, canvas.width));
    }

    if (rod) {
      ctx.stroke(this.getVerticalLine(rod, canvas.width));
    }    

    if (top && base && rod) {
      const dbhPxHeight = (130 * (base - rod)) / this.props.values.alturaVara;
      const dbh = base - dbhPxHeight;

      ctx.strokeStyle = "red";
      ctx.stroke(this.getVerticalLine(dbh, canvas.width));
      ctx.strokeStyle = "black";
    }

    if (dbhLeft) {
      ctx.stroke(this.getHorizontalLine(dbhLeft, canvas.height));
    }

    if (dbhRight) {
      ctx.stroke(this.getHorizontalLine(dbhRight, canvas.height));
    }

    if (top && base && rod && dbhLeft && dbhRight) {
      this.props.onMeasurementComplete({
        top,
        base,
        rod,
        dbhLeft,
        dbhRight
      });
    }
  };

  private getCursorPosition(
    canvas: HTMLCanvasElement,
    event: React.MouseEvent
  ) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return [x, y];
  }

  private getVerticalLine(y: number, width: number): Path2D {
    const path = new Path2D();
    path.moveTo(0, y);
    path.lineTo(width, y);
    return path;
  }

  private getHorizontalLine(x: number, height: number): Path2D {
    const path = new Path2D();
    path.moveTo(x, 0);
    path.lineTo(x, height);
    return path;
  }

  private rotateLeft = () => {
    const newRotation = this.rotation + 90;
    this.rotation = newRotation >= 360 ? newRotation - 360 : newRotation;
    this.redrawImageAndLines();
  };
  private rotateRight = () => {
    const newRotation = this.rotation - 90;
    this.rotation = newRotation < 0 ? newRotation + 360 : newRotation;
    this.redrawImageAndLines();
  };

  private toggleSelection = (
    newMeasurementStage: keyof TreeMeasurementLines
  ) => () => {
    this.setState(({ measurementStage }) => ({
      measurementStage:
        measurementStage === newMeasurementStage ? null : newMeasurementStage
    }));
  };
}