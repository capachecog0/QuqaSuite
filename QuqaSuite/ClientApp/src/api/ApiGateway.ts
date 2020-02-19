import IMacrodistritosRepo from "./Macrodistritos/IMacrodistritosRepo";
import MockMacrodistritosRepo from "./Macrodistritos/MockMacrodistritoRepo";
import IEstudiosApi from "./Estudios/IEstudiosApi";
import EstudiosApi from "./Estudios/EstudiosApi";

const mode: 'mockData' | 'realData' = 'mockData';

interface ApiGateway {
  macrodistritos: IMacrodistritosRepo;
  estudios: IEstudiosApi;
}

export default function getGateway(): ApiGateway {
  return {
    macrodistritos: MockMacrodistritosRepo,
    estudios: new EstudiosApi()
  }
}
