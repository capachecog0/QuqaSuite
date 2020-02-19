import IEstudiosApi from "./IEstudiosApi";
import axios, { AxiosAdapter } from "axios";
import IEstudio from "../../models/IEstudio";


export default class EstudiosApi implements IEstudiosApi {
  public getAll = async () => (await axios.get<IEstudio[]>("/api/Estudios")).data;
}