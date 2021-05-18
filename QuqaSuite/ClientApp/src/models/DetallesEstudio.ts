import IEstudio from "./IEstudio";
import IPuntoMuestreo from "./PuntoMuestreo";
import ArbolDto from "./ArbolDto";

export default interface IDetallesEstudio extends IEstudio {
  puntosMuestreo: IPuntoMuestreo[];
}