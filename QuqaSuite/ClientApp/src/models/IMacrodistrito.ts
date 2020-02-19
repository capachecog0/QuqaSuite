export default interface IMacrodistrito {
  nombre: string;
  distritos: Array<{ 
    numero: number,
    zonas: string[]
  }>
}