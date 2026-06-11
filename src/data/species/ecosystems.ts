export const ECOSYSTEMS = [
  {
    id: 'eco_001',
    name: 'Selva tropical',
    description:
      'Bosque tropical húmedo del interior de Campeche, con alta biodiversidad y grandes árboles emergentes.',
    typicalSpecies: ['fauna_001', 'fauna_002', 'fauna_006', 'flora_001'],
    risks: ['Serpientes venenosas', 'Calor intenso', 'Desorientación en senderos densos'],
    curiosities: ['Alberga sitios arqueológicos mayas como Calakmul'],
    migratory: ['fauna_008'],
    zone: 'Interior de Campeche, Calakmul y reservas protegidas'
  },

  {
    id: 'eco_002',
    name: 'Manglares',
    description:
      'Ecosistemas costeros dominados por mangle rojo y asociados a estuarios y lagunas.',
    typicalSpecies: ['fauna_010', 'fauna_008', 'flora_004'],
    risks: ['Cocodrilos', 'Suelos inestables', 'Mareas y corrientes'],
    curiosities: ['Uno de los sistemas de manglar más extensos de México'],
    migratory: ['fauna_008'],
    zone: 'Zonas costeras y Laguna de Términos'
  },

  {
    id: 'eco_003',
    name: 'Humedales costeros',
    description:
      'Lagunas costeras y zonas inundables que sostienen aves acuáticas, peces y mamíferos marinos.',
    typicalSpecies: ['fauna_008'],
    risks: ['Cambios meteorológicos repentinos', 'Zonas de agua profunda'],
    curiosities: ['Área importante para manatíes y aves migratorias'],
    migratory: ['fauna_008', 'fauna_006'],
    zone: 'Laguna de Términos, Isla del Carmen'
  },

  {
    id: 'eco_004',
    name: 'Sabana',
    description:
      'Áreas de transición con vegetación más abierta y pastizales, presentes en la parte norte de Campeche.',
    typicalSpecies: ['fauna_004', 'fauna_005'],
    risks: ['Poca sombra', 'Exposición al calor'],
    curiosities: ['Zona de transición entre selva y costa; paisaje de mosaico ecológico'],
    migratory: [],
    zone: 'Norte de Campeche, sabanas y claros'
  }
]

export default ECOSYSTEMS
