# Quick Start Guide

Get your DevBlog up and running in minutes.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What You'll See

- **Home Page**: Hero section with 3 featured blog posts
- **Blog Page**: All posts with tag filtering
- **Individual Posts**: 5 sample blog posts
- **About Page**: Information about the blog
- **Contact Page**: Contact form (UI only)
- **Dark Mode**: Toggle in header
- **Search**: Search bar in header

## Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start               # Start production server

# Content
npm run new-post        # Create a new blog post

# Quality
npm run typecheck       # Check TypeScript types
npm run lint           # Run ESLint
```

## Creating Your First Post

### Method 1: Interactive Script

```bash
npm run new-post
```

Follow the prompts to create a new post.

### Method 2: Manual

1. Create file in `content/posts/my-post.md`
2. Add frontmatter:

```markdown
---
title: "My First Post"
description: "This is my first blog post"
date: "2024-04-01"
tags: ["tutorial", "beginner"]
slug: "my-first-post"
coverImage: "/images/blog/my-post.jpg"
---

# My First Post

Your content here...
```

3. Add cover image to `public/images/blog/my-post.jpg`

## Customization

### Site Name & Branding

Edit `components/Header.tsx` and `components/Footer.tsx`:
```tsx
// Change "DevBlog" to your site name
<Link href="/" className="text-2xl font-bold">
  YourSiteName
</Link>
```

### Colors

Edit `tailwind.config.ts` to change colors:
```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    // ...
  }
}
```

### Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Site - Your Tagline',
  description: 'Your description',
  // ...
};
```

### Navigation

Edit `components/Header.tsx` to add/remove menu items:
```tsx
<Link href="/your-page">Your Page</Link>
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

See `DEPLOYMENT.md` for detailed instructions.

## Project Structure

```
project/
├── app/              # Pages and routes
├── components/       # React components
├── content/posts/   # Blog posts (markdown)
├── lib/             # Utilities
├── public/          # Static files
└── scripts/         # Helper scripts
```

See `PROJECT_STRUCTURE.md` for details.

## Features

- ✅ Markdown-based blog posts
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Search functionality
- ✅ Tag filtering
- ✅ SEO optimized
- ✅ Sitemap generation
- ✅ TypeScript
- ✅ Fast performance
- ✅ Clean, modern design

## Sample Posts Included

1. Getting Started with Next.js 13
2. Mastering Tailwind CSS
3. React Hooks: A Deep Dive
4. TypeScript for Beginners
5. Web Performance Optimization

Feel free to edit or delete these posts.

## Important Files

- `app/layout.tsx` - Global layout
- `app/page.tsx` - Home page
- `components/Header.tsx` - Navigation
- `lib/posts.ts` - Blog post utilities
- `content/posts/` - Your blog posts

## Next Steps

1. **Customize branding**: Update site name, colors, and metadata
2. **Add content**: Create your own blog posts
3. **Update images**: Replace placeholder images
4. **Deploy**: Push to GitHub and deploy to Vercel/Netlify
5. **Monitor**: Check performance with Lighthouse

## Common Issues

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Types Error
```bash
npm run typecheck
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

## Resources

- [Full Documentation](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Project Structure](PROJECT_STRUCTURE.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

## Support

Need help? Check:
- README.md for detailed docs
- GitHub issues for common problems
- Next.js documentation
- Community forums

## License

MIT - Feel free to use for any project!
