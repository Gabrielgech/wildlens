import type { Species } from '../../types'

export const FAUNA: Species[] = [
  {
    id: 'fauna_001',
    commonName: 'Jaguar',
    scientificName: 'Panthera onca',
    category: 'mammal',
    description:
      'El jaguar es el felino más grande de América. Es un depredador ápice con un papel clave en el control de poblaciones y el mantenimiento de la salud ecológica del bosque tropical.',
    isDangerous: true,
    dangerLevel: 5,
    encounterProtocol: [
      {
        action: 'Retrocede lentamente',
        description:
          'Mantén la calma, retrocede sin darle la espalda al animal y evita movimientos bruscos. No corras ni lo acerques; busca un lugar elevado o un vehículo si es posible.',
        urgency: 'critical'
      }
    ],
    habitat: 'Selva tropical y bosques densos en Calakmul y áreas protegidas',
    diet: 'Carnívoro: ciervos, tapires, pecaríes, y otros mamíferos',
    sounds: [
      { type: 'general', label: 'gruñidos profundos' },
      { type: 'alert', label: 'ronquidos y vocalizaciones cortas' }
    ],
    region: 'campeche',
    conservationStatus: 'EN'
  },

  {
    id: 'fauna_002',
    commonName: 'Tapir de Baird',
    scientificName: 'Tapirus bairdii',
    category: 'mammal',
    description:
      'El tapir de Baird es el mayor mamífero terrestre de Mesoamérica. Es un herbívoro principalmente nocturno que actúa como dispersor de semillas importante en la selva.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      {
        action: 'Aléjate con cuidado',
        description:
          'Observa a distancia y evita interponerte entre una cría y la madre. No molestes ni intentes alimentar al animal.',
        urgency: 'high'
      }
    ],
    habitat: 'Bosque tropical húmedo, áreas ribereñas en Calakmul',
    diet: 'Herbívoro: frutos, brotes y hojas',
    sounds: [{ type: 'general', label: 'resoplidos y silbidos' }],
    region: 'campeche',
    conservationStatus: 'EN'
  },

  {
    id: 'fauna_003',
    commonName: 'Mono aullador',
    scientificName: 'Alouatta palliata',
    category: 'mammal',
    description:
      'El mono aullador produce vocalizaciones potentes que pueden escucharse a gran distancia. Vive en grupos sociales y se alimenta principalmente de hojas y frutas.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      {
        action: 'Mantén distancia',
        description:
          'No te acerques a los primates ni alimentes a los animales; respeta su espacio y observa desde lejos.',
        urgency: 'low'
      }
    ],
    habitat: 'Copas de árboles en bosques secundarios y primarios',
    diet: 'Folívoro/frugívoro: hojas, frutas y brotes',
    sounds: [{ type: 'general', label: 'gruñidos y aullidos prolongados' }],
    region: 'campeche',
    conservationStatus: 'LC'
  },

  {
    id: 'fauna_004',
    commonName: 'Coatí',
    scientificName: 'Nasua narica',
    category: 'mammal',
    description:
      'El coatí es un mamífero omnívoro y diurno, conocido por su larga cola anillada. Frecuenta bordes de bosque y áreas abiertas cerca de fuentes de alimento.',
    isDangerous: false,
    dangerLevel: 1,
    encounterProtocol: [
      {
        action: 'No alimentes',
        description:
          'Evita acercarte o alimentar coatíes; pueden volverse agresivos si buscan comida. Guarda la comida en recipientes cerrados.',
        urgency: 'medium'
      }
    ],
    habitat: 'Bosques secos y húmedos, bordes de selva y áreas agrícolas',
    diet: 'Omnívoro: insectos, frutas, pequeños vertebrados',
    sounds: [{ type: 'general', label: 'chillidos y gruñidos' }],
    region: 'campeche',
    conservationStatus: 'LC'
  },

  {
    id: 'fauna_005',
    commonName: 'Pecarí de collar',
    scientificName: 'Pecari tajacu',
    category: 'mammal',
    description:
      'El pecarí de collar es un suido social que vive en pequeños grupos. Puede mostrarse defensivo si se siente acorralado o si hay crías presentes.',
    isDangerous: true,
    dangerLevel: 3,
    encounterProtocol: [
      {
        action: 'Evita el acercamiento',
        description:
          'No te interpongas entre los individuos y su ruta de escape; retrocede lentamente y busca un lugar seguro si el grupo se agita.',
        urgency: 'high'
      }
    ],
    habitat: 'Sabana, bordes de bosque y claros',
    diet: 'Herbívoros/omnivoros: raíces, frutos y pequeños invertebrados',
    sounds: [{ type: 'alert', label: 'gruñidos de alarma' }],
    region: 'campeche',
    conservationStatus: 'LC'
  },

  {
    id: 'fauna_006',
    commonName: 'Guacamaya roja',
    scientificName: 'Ara macao',
    category: 'bird',
    description:
      'La guacamaya roja es un loro grande y colorido que habita bosques tropicales. Se alimenta de frutos, semillas y nueces y anida en cavidades de árboles grandes como la ceiba.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      {
        action: 'Observa desde lejos',
        description:
          'No intentes interactuar ni molestar; evita acercarte a nidos y respeta las zonas de anidación.',
        urgency: 'low'
      }
    ],
    habitat: 'Selva tropical y claros con árboles grandes',
    diet: 'Frugívoro/semívoro: frutos, semillas y nueces',
    sounds: [{ type: 'general', label: 'graznidos y llamadas estridentes' }],
    region: 'campeche',
    conservationStatus: 'VU'
  },

  {
    id: 'fauna_007',
    commonName: 'Tucán pico multicolor',
    scientificName: 'Ramphastos sulfuratus',
    category: 'bird',
    description:
      'El tucán de pico multicolor es conocido por su gran pico y su papel en la dispersión de semillas. Habita selvas y bordes de bosque y suele posarse en los estratos medios y altos del dosel.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      { action: 'Mantén distancia', description: 'Observa sin perturbar.', urgency: 'low' }
    ],
    habitat: 'Dosel de bosques tropicales y bordes de selva',
    diet: 'Frutas principalmente, ocasionalmente insectos y huevos',
    sounds: [{ type: 'general', label: 'calls resonantes y croantes' }],
    region: 'campeche',
    conservationStatus: 'LC'
  },

  {
    id: 'fauna_008',
    commonName: 'Flamenco rosa',
    scientificName: 'Phoenicopterus ruber',
    category: 'bird',
    description:
      'El flamenco rosa es una especie asociada a lagunas costeras y salinas. Se alimenta filtrando pequeños invertebrados y algas que le dan su color rosado característico.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      { action: 'No molestar', description: 'No acercarse a colonias ni interferir en la alimentación.', urgency: 'low' }
    ],
    habitat: 'Lagunas costeras y humedales salinos, como Laguna de Términos',
    diet: 'Filtrador: crustáceos, pequeños invertebrados y algas',
    sounds: [{ type: 'general', label: 'calls comunitarias y croaks' }],
    region: 'campeche',
    conservationStatus: 'NT'
  },

  {
    id: 'fauna_009',
    commonName: 'Pavo ocelado',
    scientificName: 'Meleagris ocellata',
    category: 'bird',
    description:
      'El pavo ocelado es endémico de la península de Yucatán y presenta un plumaje distintivo con ocelos. Habita áreas boscosas y claros y es importante culturalmente en la región.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      { action: 'Observar', description: 'No perseguir ni alimentar.', urgency: 'low' }
    ],
    habitat: 'Bosques caducifolios y selvas bajas de la península de Yucatán',
    diet: 'Omnívoro: semillas, frutos, insectos',
    sounds: [{ type: 'general', label: 'calls fuertes y arrullos' }],
    region: 'campeche',
    conservationStatus: 'VU'
  },

  {
    id: 'fauna_010',
    commonName: 'Cocodrilo de pantano',
    scientificName: 'Crocodylus moreletii',
    category: 'reptile',
    description:
      'El cocodrilo de pantano habita manglares, estuarios y cuerpos de agua dulce costeros. Es un depredador ambush que puede ser peligroso para humanos si se le provoca o se le sorprende cerca del agua.',
    isDangerous: true,
    dangerLevel: 4,
    encounterProtocol: [
      {
        action: 'Mantén distancia del agua',
        description:
          'Evita acercarte a orillas, no nades en zonas donde hay actividad de cocodrilos y mantén a mascotas y niños lejos del borde del agua.',
        urgency: 'critical'
      }
    ],
    habitat: 'Manglares y estuarios costeros, Laguna de Términos',
    diet: 'Carnívoro: peces, aves, mamíferos pequeños',
    sounds: [{ type: 'general', label: 'gruñidos bajos y bramidos' }],
    region: 'campeche',
    conservationStatus: 'NT'
  },

  {
    id: 'fauna_011',
    commonName: 'Nauyaca',
    scientificName: 'Bothrops asper',
    category: 'reptile',
    description:
      'Bothrops asper es una víbora venenosa ampliamente distribuida en Mesoamérica. Produce un veneno hemotóxico potente y es responsable de numerosos accidentes ofídicos en la región.',
    isDangerous: true,
    dangerLevel: 5,
    encounterProtocol: [
      {
        action: 'Aléjate con calma',
        description:
          'Retrocede lentamente sin movimientos bruscos; no intentes manipularla. Busca asistencia médica inmediata en caso de mordedura y mantén a la persona inmóvil mientras se traslada al centro de salud.',
        urgency: 'critical'
      }
    ],
    habitat: 'Bordes de bosque, pastizales y áreas perturbadas',
    diet: 'Carnívoro: pequeños mamíferos, ranas y aves',
    sounds: [{ type: 'general', label: 'silencio; no emite llamadas' }],
    region: 'campeche',
    conservationStatus: 'LC'
  },

  {
    id: 'fauna_012',
    commonName: 'Iguana verde',
    scientificName: 'Iguana iguana',
    category: 'reptile',
    description:
      'La iguana verde es un gran reptil herbívoro que habita en árboles cercanos a cuerpos de agua. En algunas comunidades se consume su carne, aunque las poblaciones pueden estar sujetas a presión por caza local.',
    isDangerous: false,
    dangerLevel: 0,
    encounterProtocol: [
      { action: 'No molestar', description: 'Observa desde la distancia y evita tocar.', urgency: 'low' }
    ],
    habitat: 'Árboles ribereños, manglares y bordes de agua',
    diet: 'Herbívoro: hojas, flores y frutos',
    sounds: [{ type: 'general', label: 'silenciosa; siseos en estrés' }],
    region: 'campeche',
    conservationStatus: 'LC',
    isEdible: true
  }
]

export default FAUNA
