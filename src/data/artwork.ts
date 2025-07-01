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
    title: 'Abstract Harmony',
    description: 'A vibrant exploration of color and emotion through bold brushstrokes and dynamic composition.',
    materials: ['Acrylic on canvas', 'Mixed media'],
    availability: 'for sale',
    price: 1200,
    imageUrl: '/images/artwork/abstract-harmony.jpg',
    thumbnailUrl: '/images/artwork/thumbnails/abstract-harmony.jpg',
    dimensions: '36" x 48"',
    year: 2024,
    category: 'Abstract'
  },
  {
    id: '2',
    title: 'Mountain Serenity',
    description: 'A peaceful landscape capturing the quiet majesty of mountain peaks at golden hour.',
    materials: ['Oil on canvas'],
    availability: 'sold',
    price: 1800,
    imageUrl: '/images/artwork/mountain-serenity.jpg',
    thumbnailUrl: '/images/artwork/thumbnails/mountain-serenity.jpg',
    dimensions: '40" x 60"',
    year: 2023,
    category: 'Landscape'
  },
  {
    id: '3',
    title: 'Urban Rhythm',
    description: 'Contemporary cityscape inspired by the energy and movement of urban life.',
    materials: ['Mixed media on canvas', 'Spray paint'],
    availability: 'for sale',
    price: 950,
    imageUrl: '/images/artwork/urban-rhythm.jpg',
    thumbnailUrl: '/images/artwork/thumbnails/urban-rhythm.jpg',
    dimensions: '30" x 40"',
    year: 2024,
    category: 'Contemporary'
  },
  {
    id: '4',
    title: 'Ceramic Vase Collection',
    description: 'Handcrafted ceramic pieces showcasing organic forms and natural glazes.',
    materials: ['Stoneware', 'Natural glazes'],
    availability: 'for sale',
    price: 450,
    imageUrl: '/images/artwork/ceramic-vase.jpg',
    thumbnailUrl: '/images/artwork/thumbnails/ceramic-vase.jpg',
    dimensions: '12" x 8"',
    year: 2024,
    category: 'Ceramics'
  },
  {
    id: '5',
    title: 'Personal Collection',
    description: 'A deeply personal piece exploring themes of memory and connection.',
    materials: ['Acrylic on canvas', 'Found objects'],
    availability: 'not for sale',
    imageUrl: '/images/artwork/personal-collection.jpg',
    thumbnailUrl: '/images/artwork/thumbnails/personal-collection.jpg',
    dimensions: '24" x 36"',
    year: 2023,
    category: 'Mixed Media'
  },
  {
    id: '6',
    title: 'Ocean Waves',
    description: 'Dynamic representation of ocean waves using fluid brushwork and cool tones.',
    materials: ['Watercolor on paper'],
    availability: 'for sale',
    price: 650,
    imageUrl: '/images/artwork/ocean-waves.jpg',
    thumbnailUrl: '/images/artwork/thumbnails/ocean-waves.jpg',
    dimensions: '22" x 30"',
    year: 2024,
    category: 'Watercolor'
  }
]; 