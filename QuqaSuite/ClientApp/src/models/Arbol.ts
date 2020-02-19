import { Especie } from "./Especie";

type Medida = number;
type Masa = number;
type Georeferenciacion = any;
type Imagen = string | File;


export default interface IArbol {
    macrodistrito: string;
    distrito: string;
    barrio: string;
    georeferenciacion: Georeferenciacion;

    especie: Especie;

    altura: Medida;
    dap: Medida;
    biomasa: Masa;       

    fotografia: File;
}