import IMacrodistritosRepo from "./IMacrodistritosRepo";
import IMacrodistrito from "../../models/IMacrodistrito";

const MockMacrodistritosRepo: IMacrodistritosRepo = {
  getAll: () =>
    Promise.resolve<IMacrodistrito[]>([
      {
        nombre: "CENTRO",
        distritos: [
          {
            numero: 1,
            zonas: [
              "Central",
              "El Rosario",
              "San Sebastian",
              "Santa Barbara",
              "San Jorge"
            ]
          },
          {
            numero: 2,
            zonas: ["Miraflores", "Miraflores Sur"]
          }
        ]
      },
      {
        nombre: "COTAHUMA",
        distritos: [
          {
            numero: 3,
            zonas: [
              "8 de Diciembre",
              "Sopocachi Alto",
              "Sopocachi",
              "Sopocachi Bajo",
              "Kantutani"
            ]
          },
          {
            numero: 4,
            zonas: [
              "Las Lomas",
              "Llojeta",
              "Pasankeri",
              "Inca Llojeta",
              "Bello Horizonte",
              "Obispo Bosque",
              "Tembladerani",
              "Alpacoma",
              "Cotahuma"
            ]
          },
          {
            numero: 5,
            zonas: [
              "San Juan de Cotahuma",
              "Alto Tacagua",
              "Faro Murillo",
              "Tacagua",
              "Tupac Amaru",
              "Villa Nuevo Potosí"
            ]
          },
          { numero: 6, zonas: ["Belén", "San Pedro", "San Pedro Alto"] }
        ]
      },
      {
        nombre: "MAX PAREDES",
        distritos: [
          {
            numero: 7,
            zonas: [
              "Sagrado Corazón de Jesús",
              "Barrio Lindo",
              "14 de Septiembre",
              "23 de Marzo - La Hoyada",
              "Chamoco Chico",
              "Gran Poder",
              "Los Andes",
              "Obispo Indaburo",
              "Chijini",
              "Alto Sagrado Corazón de Jesús"
            ]
          },
          {
            numero: 8,
            zonas: [
              "Mariscal Santa Cruz",
              "El Tejar",
              "Callampaya",
              "Villa Victoria"
            ]
          },
          {
            numero: 9,
            zonas: [
              "Rincón La Portada",
              "Alto Villa Victoria",
              "Villa Antofagasta",
              "Alto Mariscal Santa Cruz",
              "Alto Munaypata Cusicancha",
              "Unión Alianza",
              "Chualluma",
              "Huacataqui",
              "La Portada",
              "Munaypata",
              "Alto Tejar"
            ]
          },
          {
            numero: 10,
            zonas: ["Belén", "San Pedro", "San Pedro Alto"]
          }
        ]
      },
      {
        nombre: "PERIFERICA",
        distritos: [
          {
            numero: 11,
            zonas: [
              "Alto Vino Tinto",
              "Kamirpata",
              "Tangani",
              "Villa 18 de Mayo",
              "Achachicala",
              "Agua de la Vida",
              "Challapampa",
              "Las Nieves",
              "Limanipata",
              "Plan Autopista",
              "Villa de La Cruz",
              "Villa Pabón",
              "Vino Tinto",
              "Zona Norte"
            ]
          },
          {
            numero: 12,
            zonas: [
              "Alto Las Delicias",
              "Cupilupaca",
              "Santa Rosa",
              "Santa Rosa Tiji",
              "Santiago de Lacaya",
              "27 de Mayo",
              "Agua de la Vida - Norte",
              "Las Delicias",
              "Miraflores Alto",
              "Pokeni - Chapuma",
              "San Juan",
              "San Juan Lazareto"
            ]
          },
          {
            numero: 13,
            zonas: [
              "3 de Mayo",
              "Alto La Merced",
              "Chuquiaguillo",
              "Condorini",
              "Kochapampa",
              "Urkupiña",
              "Villa El Carmen",
              "Barrio Gráfico",
              "Barrio Petrolero",
              "Huaychani",
              "Kalajahuira",
              "La Merced",
              "Rosasani",
              "Villa Fátima"
            ]
          }
        ]
      },
      {
        nombre: "SAN ANTONIO",
        distritos: [
          {
            numero: 14,
            zonas: [
              "24 de Junio",
              "Pacasa",
              "San Simón",
              "Valle Hermoso",
              "Villa Copacabana"
            ]
          },
          {
            numero: 15,
            zonas: ["Escobar Uría", "San Antonio"]
          },
          {
            numero: 16,
            zonas: [
              "Primavera",
              "Villa Salomé",
              "Ciudad del Niño",
              "Pampahasi",
              "Valle de las Flores",
              "Chinchaya"
            ]
          },
          { numero: 17, zonas: ["Belén", "San Pedro", "San Pedro Alto"] }
        ]
      },
      {
        nombre: "SUR",
        distritos: [
          {
            numero: 18,
            zonas: [
              "Achumani",
              "Achumani Porvenir Kantutas",
              "Alto Achumani",
              "Alto Irpavi",
              "Aruntaya",
              "Auquisamaña",
              "Alto Calacoto",
              "Ciudadela Stronguista",
              "Huantaqui",
              "Huayllani",
              "Chijipata",
              "Koani",
              "Los Pinos",
              "Los Rosales",
              "Meseta Achumani",
              "San Miguel",
              "Vergel",
              "Alto La Florida",
              "Santa Rita",
              "Jardines del Sur",
              "Jurenko",
              "Calacoto",
              "Condores Lakota",
              "Cota Cota",
              "Irpavi",
              "Irpavi II",
              "La Florida",
              "Kellumani",
              "Chicani"
            ]
          },
          {
            numero: 19,
            zonas: [
              "Casegural",
              "Coqueni",
              "Virgen de Copacabana",
              "Kesini",
              "Kupillani - Codavisa",
              "Los Rosales - Alto Calacoto",
              "Ovejuyo",
              "Ovejuyo - El Arenal",
              "Pedregal",
              "Rosas de Calacalani",
              "Virgen de La Merced",
              "Wilacota",
              "Chasquipampa",
              "Huancané",
              "Villa Apaña",
              "Lomas de Achumani"
            ]
          },
          {
            numero: 21,
            zonas: [
              "Alto Seguencoma",
              "Bella Vista",
              "Huanu Huanuni",
              "Seguencoma Bajo",
              "Ventilla",
              "San Alberto",
              "Bajo Llojeta",
              "Alto Obrajes",
              "Bolognia",
              "Caliri",
              "Gramadal",
              "Obrajes"
            ]
          }
        ]
      },
      {
        nombre: "MALLASA",
        distritos: [
          {
            numero: 20,
            zonas: [
              "Isla Verde",
              "Mallasa",
              "Mallasilla",
              "Aranjuez",
              "Jupapina",
              "Amor de Dios",
              "Lipari",
              "Chiaraque"
            ]
          }
        ]
      },
      {
        nombre: "HAMPATURI",
        distritos: [{ numero: 22, zonas: ["Distrito 22"] }]
      },
      {
        nombre: "ZONGO",
        distritos: [{ numero: 23, zonas: ["Distrito 23"] }]
      }
    ])
};

export default MockMacrodistritosRepo;
