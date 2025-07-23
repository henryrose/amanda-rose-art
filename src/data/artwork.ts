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
    title: 'Alignment',
    description: '[UPDATE WITH REAL DESCRIPTION - Add the story behind this piece, inspiration, techniques used, etc.]',
    materials: ['Acrylic on birch ply'],
    availability: 'sold',
    imageUrl: '/amanda-rose-art/images/artwork/LW6-removebg.png',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/LW6-removebg.jpg',
    dimensions: '4" x 12"',
    year: 2020, // UPDATE YEAR
    category: '[UPDATE CATEGORY]'
  },
  {
    id: '2',
    title: 'Small Energy',
    description: '[UPDATE WITH REAL DESCRIPTION - Add the story behind this piece, inspiration, techniques used, etc.]',
    materials: ['Acrylic on birch ply'],
    availability: 'sold',
    imageUrl: '/amanda-rose-art/images/artwork/LW7-removebg.png',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/LW7-removebg.jpg',
    dimensions: '4" x 12"',
    year: 2024, // UPDATE YEAR
    category: '[UPDATE CATEGORY]'
  },
  {
    id: '3',
    title: 'Mini Wonder',
    description: '[UPDATE WITH REAL DESCRIPTION - Add the story behind this piece, inspiration, techniques used, etc.]',
    materials: ['Acrylic on birch ply'],
    availability: 'sold',
    imageUrl: '/amanda-rose-art/images/artwork/LW8-removebg.png',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/LW8-removebg.jpg',
    dimensions: '3" x 6"',
    year: 2024, // UPDATE YEAR
    category: '[UPDATE CATEGORY]'
  },
  {
    id: '4',
    title: 'Ajna',
    description: '[UPDATE WITH REAL DESCRIPTION - Add the story behind this piece, inspiration, techniques used, etc.]',
    materials: ['Acrylic on birch ply'],
    availability: 'for sale',
    price: 850, // UPDATE PRICE
    imageUrl: '/amanda-rose-art/images/artwork/ceramics-square-03-removebg.png',
    thumbnailUrl: '/amanda-rose-art/images/artwork/thumbnails/ceramics-square-03-removebg.jpg',
    dimensions: '12" x 48"',
    year: 2024, // UPDATE YEAR
    category: '[UPDATE CATEGORY]'
  }
];
