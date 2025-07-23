export interface Artist {
  name: string;
  photoUrl: string;
  artistStatement: string;
  bio: string;
  contactEmail: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

export const artist: Artist = {
  name: "Amanda Rose",
  photoUrl: "/amanda-rose-art/images/artist/amanda-rose.png",
  artistStatement: "I create art as a meditation on nature, motherhood, and presence. Working in acrylics on plywood, ceramics, and fiber, I explore the quiet spaces where the outer world meets the inner one. My practice is rooted in stillness—shaped by time in nature, the rhythms of daily life, and the perspective of my young daughter. Each piece is an invitation to slow down, notice, and connect.",
  bio: "These peaceful meditation-informed pieces will look amazing in your Peloton room. All works are acrylic paintings on wood unless otherwise specified. Some have had a resin application, others are matte with optional resin application. As always, inquire within. ",
  contactEmail: "amanda@example.com",
  socialLinks: {
    instagram: "https://instagram.com/amandaroseart",
    facebook: "https://facebook.com/amandaroseart",
    website: "https://amandaroseart.com"
  }
}; 