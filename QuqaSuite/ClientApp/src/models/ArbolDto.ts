import { Especie } from "./Especie";
import FotografiaArbolDto from "./FotografiaArbolDto";

export default interface ArbolDto {
  Id: number;
  macrodistrito: string;
  distrito: string;
  barrio: string;
  especie: Especie;
  altura: number;
  dap: number;
  biomasa: number;
  fotografiaArbol: FotografiaArbolDto;  
}