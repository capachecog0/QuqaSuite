import ArbolDto from "./ArbolDto";

export default interface IPuntoMuestreo {
  id: number;
  numero: number;
  nombre: string;
  especimenes: ArbolDto[];
}