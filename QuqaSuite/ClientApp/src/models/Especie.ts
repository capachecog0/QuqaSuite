export class Especie {
  constructor(
    public nombreComun: string,
    public nombreCientifico: string,
    public formulaBiomasa: (dap: number, h: number) => number
  ) {}
  public static lista: Especie[] = [
    new Especie("Acacia Verde", "Acacia Retinoides", dap => 0.06 * dap ** 2.16),
    new Especie(
      "Cipres Comun",
      "Cupressus sempervirens",
      (dap, h) => -4.1345 + 2.4359 * 10 ** -2 * dap ** 2 * h + 1.4156 * dap
    ),
    new Especie(
      "Acacia de Hoja Azul",
      "Acacia Saligna",
      dap => 0.06 * dap ** 2.16
    ),
    new Especie("Alamo Negro", "Populus Nigra", dap => 0.0021 * dap ** 1.873),
    new Especie("Coniferas", "Coniferas", dap => 0.035702 * dap ** 2.580671),
    new Especie(
      "Acacia Australiana",
      "Acacia Dealbata",
      dap => 0.06 * dap ** 2.16
    ),
    new Especie(
      "Eucalipto Comun",
      "Eucalyptus Globulus",
      (dap, h) =>
        0.283168466 * (0.00309 * (dap / 2.54) ** 2.15182 * (3.28 * h) ** 1.873)
    ),
    new Especie("Alamo Blanco", "Populus Alba", dap => 0.0021 * dap ** 1.873),
    new Especie(
      "Ciprés de Monterrey",
      "Cupressus Macrocarpa",
      dap => 0.035598 * dap ** 2.495263
    ),
    new Especie(
      "Jacaranda",
      "Jacaranda mimosifolia",
      (dap, h) =>
        0.283168466 *
        (0.011312 * (dap / 2.54) ** 2.15182 * (3.28 * h) ** 0.548045)
    )
  ];
}

export const lista = Especie.lista;
