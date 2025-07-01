import Image from "next/image";
import { artist } from '@/data/artist';

export default function BioPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {artist.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Painter & Ceramicist
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
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h4>
                <p className="text-gray-600 mb-4">
                  Interested in my work? I&apos;d love to hear from you about commissions, 
                  collaborations, or just to say hello.
                </p>
                <a
                  href={`mailto:${artist.contactEmail}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
