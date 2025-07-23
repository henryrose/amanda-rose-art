export interface Artwork {
  id: string;
  title: string;
  description: string;
  materials: string[];
  availability: 'for sale' | 'not for sale' | 'sold';
  price?: number;
  imageUrl: string;
  thumbnailUrl: string;
  dimensions?: string;
  year?: number;
  category?: string;
}

export const artwork: Artwork[] = [
  {
    id: '1',
    title: 'Studio Series #1',
    description: 'A contemplative piece exploring the intersection of light and shadow, inviting viewers into a space of quiet reflection. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on canvas', 'Oil pastels'],
    availability: 'for sale',
    price: 600,
    imageUrl: '/amanda-rose-art/images/artwork/IMG_4971.jpg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/img-4971.jpg',
    dimensions: '16″ x 20″ [UPDATE SIZE]',
    year: 2023,
    category: 'Mixed Media'
  },
  {
    id: '2',
    title: 'Creative Process',
    description: 'This work captures a moment of stillness, where color and texture converge to create a sense of inner peace. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on canvas', 'Oil pastels'],
    availability: 'for sale',
    price: 650,
    imageUrl: '/amanda-rose-art/images/artwork/IMG_4977.jpg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/img-4977.jpg',
    dimensions: '18″ x 24″ [UPDATE SIZE]',
    year: 2024,
    category: 'Mixed Media'
  },
  {
    id: '3',
    title: 'Work in Progress',
    description: 'Inspired by daily meditations and time spent in nature, this piece embodies tranquility and presence. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on canvas', 'Oil pastels'],
    availability: 'for sale',
    price: 700,
    imageUrl: '/amanda-rose-art/images/artwork/IMG_4981.jpg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/img-4981.jpg',
    dimensions: '20″ x 24″ [UPDATE SIZE]',
    year: 2024,
    category: 'Mixed Media'
  },
  {
    id: '4',
    title: 'Gentle Awakening',
    description: 'An exploration of organic forms and natural rhythms, reflecting the artist\'s connection to the earth. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'not for sale',
    imageUrl: '/amanda-rose-art/images/artwork/LW1.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw1.jpg',
    dimensions: '12″ x 16″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '5',
    title: 'Soft Whispers',
    description: 'Through layered brushstrokes and subtle color variations, this work invites deep contemplation. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'sold',
    imageUrl: '/amanda-rose-art/images/artwork/LW10.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw10.jpg',
    dimensions: '24″ x 30″ [UPDATE SIZE]',
    year: 2023,
    category: 'Abstract'
  },
  {
    id: '6',
    title: 'Tranquil Moments',
    description: 'A meditation on impermanence and beauty, created during a period of personal reflection and growth. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'for sale',
    price: 1050,
    imageUrl: '/amanda-rose-art/images/artwork/LW11.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw11.jpg',
    dimensions: '14″ x 18″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '7',
    title: 'Inner Stillness',
    description: 'A contemplative piece exploring the intersection of light and shadow, inviting viewers into a space of quiet reflection. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'for sale',
    price: 1100,
    imageUrl: '/amanda-rose-art/images/artwork/LW12.jpg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw12.jpg',
    dimensions: '22″ x 28″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '8',
    title: 'Flowing Grace',
    description: 'This work captures a moment of stillness, where color and texture converge to create a sense of inner peace. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'for sale',
    price: 1150,
    imageUrl: '/amanda-rose-art/images/artwork/LW13.jpg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw13.jpg',
    dimensions: '8″ x 10″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '9',
    title: 'Sacred Space',
    description: 'Inspired by daily meditations and time spent in nature, this piece embodies tranquility and presence. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'not for sale',
    imageUrl: '/amanda-rose-art/images/artwork/LW2.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw2.jpg',
    dimensions: '16″ x 20″ [UPDATE SIZE]',
    year: 2023,
    category: 'Abstract'
  },
  {
    id: '10',
    title: 'Morning Light',
    description: 'An exploration of organic forms and natural rhythms, reflecting the artist\'s connection to the earth. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'sold',
    imageUrl: '/amanda-rose-art/images/artwork/LW3.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw3.jpg',
    dimensions: '18″ x 24″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '11',
    title: 'Evening Calm',
    description: 'Through layered brushstrokes and subtle color variations, this work invites deep contemplation. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'for sale',
    price: 900,
    imageUrl: '/amanda-rose-art/images/artwork/LW4.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw4.jpg',
    dimensions: '20″ x 24″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '12',
    title: 'Natural Harmony',
    description: 'A meditation on impermanence and beauty, created during a period of personal reflection and growth. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'for sale',
    price: 950,
    imageUrl: '/amanda-rose-art/images/artwork/LW5.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw5.jpg',
    dimensions: '12″ x 16″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '13',
    title: 'Ethereal Meditation',
    description: 'A contemplative piece exploring the intersection of light and shadow, inviting viewers into a space of quiet reflection. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'for sale',
    price: 1000,
    imageUrl: '/amanda-rose-art/images/artwork/LW6.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw6.jpg',
    dimensions: '24″ x 30″ [UPDATE SIZE]',
    year: 2023,
    category: 'Abstract'
  },
  {
    id: '14',
    title: 'Quiet Contemplation',
    description: 'This work captures a moment of stillness, where color and texture converge to create a sense of inner peace. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'not for sale',
    imageUrl: '/amanda-rose-art/images/artwork/LW7.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw7.jpg',
    dimensions: '14″ x 18″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '15',
    title: 'Peaceful Rhythm',
    description: 'Inspired by daily meditations and time spent in nature, this piece embodies tranquility and presence. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Acrylic on plywood', 'Mixed media'],
    availability: 'sold',
    imageUrl: '/amanda-rose-art/images/artwork/LW8.jpeg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/lw8.jpg',
    dimensions: '22″ x 28″ [UPDATE SIZE]',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '16',
    title: 'Clay Meditation',
    description: 'An exploration of organic forms and natural rhythms, reflecting the artist\'s connection to the earth. [UPDATE WITH REAL DESCRIPTION]',
    materials: ['Stoneware', 'Natural glazes', 'Terra cotta'],
    availability: 'for sale',
    price: 450,
    imageUrl: '/amanda-rose-art/images/artwork/ceramics-square-03.jpg',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/ceramics-square-03.jpg',
    dimensions: '8″ x 10″ [UPDATE SIZE]',
    year: 2024,
    category: 'Ceramics'
  }
];
