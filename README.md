# DevBlog - Modern Development Blog

A complete, modern blog website built with Next.js 13, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, SEO optimization, and markdown-based content management.

## Features

- **Modern Stack**: Built with Next.js 13 App Router, TypeScript, and Tailwind CSS
- **Markdown-Based**: Blog posts stored as markdown files with frontmatter
- **SEO Optimized**: Dynamic meta tags, sitemap generation, and semantic HTML
- **Dark Mode**: Full dark mode support with system preference detection
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Search Functionality**: Search posts by title, description, or tags
- **Tag System**: Filter posts by categories and tags
- **Performance**: Optimized images, code splitting, and fast loading times
- **Type-Safe**: Full TypeScript coverage for better development experience

## Pages

- **Home**: Hero section with featured posts and call-to-action
- **Blog**: Listing page with all posts and tag filtering
- **Blog Post**: Individual post pages with rich typography
- **About**: Information about the blog and mission
- **Contact**: Contact form with validation (UI only)
- **Search**: Search results page

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Markdown Processing**: gray-matter, remark, remark-html
- **Theme**: next-themes for dark mode

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download the repository:

```bash
cd project
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Type Check

```bash
npm run typecheck
```

## Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── [slug]/       # Individual blog post
│   │   ├── search/       # Search results
│   │   └── page.tsx      # Blog listing
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Sitemap generator
│   └── robots.ts         # Robots.txt generator
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── BlogCard.tsx      # Blog post card component
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header with navigation
│   └── ThemeProvider.tsx # Dark mode provider
├── content/              # Blog content
│   └── posts/           # Markdown blog posts
├── lib/                  # Utility functions
│   ├── posts.ts         # Post fetching and processing
│   └── utils.ts         # General utilities
├── public/              # Static files
│   └── images/         # Images
└── README.md           # This file
```

## Adding Blog Posts

Create a new markdown file in `content/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
date: "2024-04-01"
tags: ["nextjs", "react", "tutorial"]
slug: "your-post-slug"
coverImage: "/images/blog/your-image.jpg"
---

# Your Content Here

Write your blog post content using markdown...
```

### Frontmatter Fields

- **title**: Post title (required)
- **description**: Short description for SEO and previews (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **tags**: Array of tags/categories (required)
- **slug**: URL-friendly identifier (required)
- **coverImage**: Path to cover image (required)

## Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Updating Site Information

1. Update metadata in `app/layout.tsx`
2. Change site name in `components/Header.tsx` and `components/Footer.tsx`
3. Update base URL in `app/sitemap.ts` and `app/robots.ts`

### Adding Images

Place images in `public/images/blog/` and reference them in post frontmatter:

```yaml
coverImage: "/images/blog/my-image.jpg"
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Static Export

For static hosting:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... other config
};
```

2. Build:
```bash
npm run build
```

3. Deploy the `out` folder

## SEO Features

- Dynamic meta tags for each page
- Open Graph tags for social sharing
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized images with Next/Image

## Performance

- Server-side rendering (SSR)
- Static site generation (SSG) for blog posts
- Automatic code splitting
- Optimized images
- Minimal JavaScript bundle
- Fast page transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or support, please contact us through the contact page.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
