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
  photoUrl: "/images/artist/artist-photo.jpg",
  artistStatement: "I create art that explores the intersection of emotion, memory, and the natural world. Each piece is a journey of discovery, where I blend traditional techniques with contemporary approaches to capture moments of beauty and meaning.",
  bio: "Amanda Rose is a contemporary artist based in Portland, Oregon, specializing in painting and ceramics. With over 15 years of experience, her work has been exhibited in galleries across the Pacific Northwest and featured in several art publications. Amanda's artistic practice is deeply rooted in her connection to nature and her exploration of human emotion through color, texture, and form. She holds a BFA from the Pacific Northwest College of Art and continues to develop her craft through ongoing study and experimentation.",
  contactEmail: "amanda@example.com",
  socialLinks: {
    instagram: "https://instagram.com/amandaroseart",
    facebook: "https://facebook.com/amandaroseart",
    website: "https://amandaroseart.com"
  }
}; 