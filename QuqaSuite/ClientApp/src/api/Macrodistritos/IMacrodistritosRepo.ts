import IMacrodistrito from "../../models/IMacrodistrito";

export default interface IMacrodistritosRepo {
  getAll: () => Promise<IMacrodistrito[]>;
}
