import IEstudio from "../../models/IEstudio";
import IDetallesEstudio from "../../models/DetallesEstudio";

export default interface IEstudiosApi {
  getAll: () => Promise<IEstudio[]>
  find: (id: number) => Promise<IDetallesEstudio>
}