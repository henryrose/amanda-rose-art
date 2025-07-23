'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Artwork } from '@/data/artwork';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'for sale':
        return 'bg-green-100 text-green-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      case 'not for sale':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in-up"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={artwork.thumbnailUrl}
          alt={artwork.title}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Availability badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(artwork.availability)}`}>
            {artwork.availability}
          </span>
        </div>

        {/* Price badge */}
        {artwork.price && artwork.availability === 'for sale' && (
          <div className="absolute bottom-2 left-2">
            <span className="bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-semibold text-gray-900">
              ${artwork.price.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {artwork.title}
        </h3>

        {/* Materials */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">Materials:</p>
          <div className="flex flex-wrap gap-1">
            {artwork.materials.map((material, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Additional details */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          {artwork.dimensions && (
            <span>{artwork.dimensions}</span>
          )}
          {artwork.year && (
            <span>{artwork.year}</span>
          )}
        </div>
      </div>
    </div>
  );
} 