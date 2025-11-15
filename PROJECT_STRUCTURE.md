# Project Structure

This document provides a detailed overview of the DevBlog project structure.

## Root Directory

```
project/
├── app/                    # Next.js App Router directory
├── components/            # React components
├── content/              # Blog content (Markdown files)
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
├── scripts/              # Helper scripts
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## App Directory (`/app`)

Contains all pages and routes using Next.js App Router.

```
app/
├── layout.tsx           # Root layout (header, footer, providers)
├── page.tsx            # Home page
├── globals.css         # Global styles
├── sitemap.ts          # Sitemap generator
├── robots.ts           # Robots.txt generator
├── not-found.tsx       # 404 page
├── about/
│   └── page.tsx        # About page
├── contact/
│   └── page.tsx        # Contact page with form
└── blog/
    ├── page.tsx        # Blog listing with filtering
    ├── search/
    │   └── page.tsx    # Search results page
    └── [slug]/
        ├── page.tsx    # Individual blog post
        └── not-found.tsx # Post not found page
```

### Key Files:

- **layout.tsx**: Global layout with header, footer, and theme provider
- **page.tsx**: Home page with hero section and featured posts
- **blog/page.tsx**: Blog listing with tag filtering
- **blog/[slug]/page.tsx**: Dynamic blog post pages
- **blog/search/page.tsx**: Search functionality

## Components (`/components`)

Reusable React components.

```
components/
├── ui/                 # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── badge.tsx
│   └── ... (40+ UI components)
├── Header.tsx          # Site header with navigation
├── Footer.tsx          # Site footer
├── BlogCard.tsx        # Blog post preview card
└── ThemeProvider.tsx   # Dark mode provider
```

### Component Details:

- **Header.tsx**: Navigation, search, dark mode toggle
- **Footer.tsx**: Site links, social media, copyright
- **BlogCard.tsx**: Displays post preview with image, title, description
- **ui/**: Pre-built components from shadcn/ui library

## Content (`/content`)

Blog posts stored as Markdown files.

```
content/
└── posts/
    ├── getting-started-with-nextjs.md
    ├── mastering-tailwind-css.md
    ├── react-hooks-deep-dive.md
    ├── typescript-for-beginners.md
    └── web-performance-optimization.md
```

### Post Structure:

Each post has frontmatter metadata:
```yaml
---
title: "Post Title"
description: "Brief description"
date: "2024-04-01"
tags: ["tag1", "tag2"]
slug: "post-slug"
coverImage: "/images/blog/image.jpg"
---

# Markdown content here...
```

## Library (`/lib`)

Utility functions and helpers.

```
lib/
├── posts.ts           # Post fetching and processing
└── utils.ts          # General utilities (cn function)
```

### Key Functions in posts.ts:

- `getAllPosts()`: Fetch all blog posts
- `getPostBySlug(slug)`: Get single post by slug
- `getPostContent(slug)`: Convert markdown to HTML
- `getAllTags()`: Get all unique tags
- `getPostsByTag(tag)`: Filter posts by tag
- `searchPosts(query)`: Search posts by title/description/tags

## Public (`/public`)

Static files served directly.

```
public/
├── images/
│   └── blog/
│       ├── nextjs.jpg
│       ├── tailwind.jpg
│       ├── react.jpg
│       ├── typescript.jpg
│       └── performance.jpg
└── robots.txt
```

### Image Guidelines:

- Place blog cover images in `/public/images/blog/`
- Reference in posts as `/images/blog/filename.jpg`
- Recommended size: 1200x630px
- Format: JPG or PNG

## Scripts (`/scripts`)

Helper scripts for content management.

```
scripts/
└── create-post.js     # Interactive post creation script
```

### Usage:

```bash
npm run new-post
```

Creates a new blog post with proper frontmatter.

## Configuration Files

### next.config.js
```javascript
// Next.js configuration
- ESLint settings
- Image optimization
- Build settings
```

### tailwind.config.ts
```typescript
// Tailwind CSS configuration
- Theme colors
- Typography
- Animations
- Plugins
```

### tsconfig.json
```json
// TypeScript configuration
- Compiler options
- Path aliases (@/*)
- Strict mode enabled
```

### package.json
```json
// Project configuration
- Dependencies
- Scripts
- Metadata
```

## Styling

### Global Styles (`app/globals.css`)

- Tailwind CSS imports
- CSS variables for theming
- Custom prose styles for blog content
- Dark mode support

### Tailwind Configuration

- Custom color schemes
- Typography settings
- Component variants
- Animation utilities

## Routes and Pages

### Static Routes:
- `/` - Home page
- `/blog` - Blog listing
- `/about` - About page
- `/contact` - Contact page

### Dynamic Routes:
- `/blog/[slug]` - Individual blog posts
- `/blog/search?q=query` - Search results

### Generated Routes:
- `/sitemap.xml` - XML sitemap
- `/robots.txt` - Robots file

## Data Flow

1. **Blog Posts**:
   - Stored as `.md` files in `/content/posts`
   - Parsed with `gray-matter`
   - Converted to HTML with `remark`
   - Rendered with proper styling

2. **Pages**:
   - Server components fetch data at build time
   - Static generation for blog posts
   - Dynamic rendering for search

3. **Styling**:
   - Tailwind CSS for utility classes
   - CSS variables for theming
   - Dark mode via `next-themes`

## Key Features Implementation

### Dark Mode
- Provider: `ThemeProvider.tsx`
- Toggle: `Header.tsx`
- Styles: CSS variables in `globals.css`

### Search
- Functionality: `lib/posts.ts` → `searchPosts()`
- UI: `app/blog/search/page.tsx`
- Trigger: Search bar in header

### Tags
- Extraction: `getAllTags()` in `lib/posts.ts`
- Filtering: `?tag=tagname` query parameter
- Display: Badge components

### SEO
- Metadata: Each page has custom metadata
- Sitemap: Auto-generated at `/sitemap.xml`
- Robots: Custom rules at `/robots.txt`
- Open Graph: Social sharing metadata

## Adding New Features

### New Page:
1. Create file in `app/your-page/page.tsx`
2. Add metadata export
3. Update navigation in `Header.tsx`

### New Component:
1. Create file in `components/YourComponent.tsx`
2. Import and use in pages
3. Follow existing patterns

### New Blog Post:
1. Run `npm run new-post`
2. Edit generated markdown file
3. Add cover image to `/public/images/blog/`

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Create content**: `npm run new-post`
3. **Type check**: `npm run typecheck`
4. **Build**: `npm run build`
5. **Deploy**: Push to GitHub, auto-deploy via Vercel

## Performance Considerations

- Static generation for blog posts
- Image optimization with Next/Image
- Code splitting (automatic)
- CSS optimization with Tailwind
- Minimal JavaScript bundle

## Maintenance

### Regular Tasks:
- Add new blog posts
- Update dependencies
- Monitor performance
- Check for broken links
- Update images

### Updating Content:
- Edit markdown files directly
- Rebuild to see changes
- Images can be replaced in `/public`

## Best Practices

1. Keep posts in markdown format
2. Use semantic HTML
3. Optimize images before uploading
4. Write descriptive metadata
5. Test on multiple devices
6. Monitor Core Web Vitals
7. Keep dependencies updated
8. Follow TypeScript conventions
