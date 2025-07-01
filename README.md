# Amanda Rose Art Gallery

A beautiful, responsive art gallery website built with Next.js, featuring an artist bio and gallery with lightbox functionality.

## Features

- **Artist Bio Page**: Professional artist statement, photo, and biography
- **Gallery**: Grid layout with artwork thumbnails and detailed information
- **Lightbox**: Full-screen image viewer with navigation
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Static Export**: Generates static HTML/JS files for easy deployment
- **SEO Optimized**: Meta tags and structured data for search engines

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Animations
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

Generate static files:
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Customization

### Adding Artwork

1. Add your artwork images to the `public/images/artwork/` directory
2. Add thumbnail images to `public/images/artwork/thumbnails/`
3. Update the artwork data in `src/data/artwork.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Artwork Title',
  description: 'Brief description (under 500 characters)',
  materials: ['Material 1', 'Material 2'],
  availability: 'for sale' | 'not for sale' | 'sold',
  price: 1200, // optional, only for 'for sale' items
  imageUrl: '/images/artwork/your-image.jpg',
  thumbnailUrl: '/images/artwork/thumbnails/your-thumbnail.jpg',
  dimensions: '36" x 48"', // optional
  year: 2024, // optional
  category: 'Abstract' // optional
}
```

### Updating Artist Information

Edit the artist data in `src/data/artist.ts`:

```typescript
export const artist: Artist = {
  name: "Your Name",
  photoUrl: "/images/artist/your-photo.jpg",
  artistStatement: "Your artist statement...",
  bio: "Your detailed bio...",
  contactEmail: "your@email.com",
  socialLinks: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    website: "https://yourwebsite.com"
  }
};
```

### Styling

The website uses Tailwind CSS for styling. You can customize colors, fonts, and layout by modifying:

- `src/app/globals.css` - Global styles and custom utilities
- Component files - Individual component styling
- `tailwind.config.js` - Tailwind configuration

## Deployment

### Static Hosting (Recommended)

The website is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `out/` folder or connect your repository
- **GitHub Pages**: Push the `out/` folder to a GitHub repository
- **Any static hosting service**: Upload the contents of the `out/` folder

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Netlify Deployment

1. Build the project: `npm run build`
2. Upload the `out/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## File Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Bio page (homepage)
│   │   ├── gallery/        # Gallery page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer with contact info
│   │   ├── ArtworkCard.tsx # Individual artwork display
│   │   └── ImageLightbox.tsx # Full-screen image viewer
│   └── data/               # Data files
│       ├── artist.ts       # Artist information
│       └── artwork.ts      # Artwork data
├── public/                 # Static assets
│   └── images/            # Image files
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Performance

- **Image Optimization**: Next.js Image component with lazy loading
- **Static Generation**: Pre-built HTML for fast loading
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **SEO**: Meta tags and structured data for search engines

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
