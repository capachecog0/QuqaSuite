import IEstudio from "../../models/IEstudio";

export default interface IEstudiosApi {
  getAll: () => Promise<IEstudio[]>
}