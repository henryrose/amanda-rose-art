'use client';

import Image from "next/image";
import { artist } from '@/data/artist';

export default function BioPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f9edec'}}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-600 to-amber-700 text-white py-20" style={{background: 'linear-gradient(to right, #c7bfb2, #a3534a)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {artist.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Contemporary Artist & Ceramicist
          </p>
        </div>
      </section>

      {/* Artist Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Artist Photo */}
            <div className="relative animate-slide-in-left">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={artist.photoUrl}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-purple-100">
                          <div class="text-center">
                            <div class="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-white text-2xl font-bold">AR</span>
                            </div>
                            <p class="text-gray-600 font-medium">Amanda Rose</p>
                            <p class="text-gray-500 text-sm">Artist Photo</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>

            {/* Artist Statement & Bio */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Artist Statement */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Artist Statement</h2>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  &ldquo;{artist.artistStatement}&rdquo;
                </p>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">About</h3>
                <p className="text-gray-700 leading-relaxed">
                  {artist.bio}
                </p>
              </div>

              {/* Contact CTA */}
              <div className="p-6 rounded-lg shadow-md" style={{backgroundColor: '#dcd4c1'}}>
                <h4 className="text-lg font-semibold mb-3" style={{color: '#a3534a'}}>Get in Touch</h4>
                <p className="mb-4" style={{color: '#635a52'}}>
                  Interested in my work? I&apos;d love to hear from you about commissions, 
                  collaborations, or just to say hello.
                </p>
                <a
                  href={`mailto:${artist.contactEmail}`}
                  className="inline-flex items-center text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{backgroundColor: '#a3534a'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8e4841'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a3534a'}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore My Work</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover my collection of paintings and ceramics, each piece telling its own unique story.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center text-white px-8 py-3 rounded-lg font-medium transition-colors"
              style={{backgroundColor: '#a3534a'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8e4841'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a3534a'}
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
