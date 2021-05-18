import IEstudiosApi from "./IEstudiosApi";
import axios, { AxiosAdapter } from "axios";
import IEstudio from "../../models/IEstudio";
import IDetallesEstudio from "../../models/DetallesEstudio";


export default class EstudiosApi implements IEstudiosApi {
  public getAll = async () => (await axios.get<IEstudio[]>("/api/Estudios")).data;
  public find = async (id: number) => (await axios.get<IDetallesEstudio>(`/api/estudios/${id}`)).data;
}