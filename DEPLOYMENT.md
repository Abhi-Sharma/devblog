# Deployment Guide

This guide covers deploying your DevBlog to various hosting platforms.

## Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Automatic Deployments

Once set up, Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Netlify

### Steps:

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

3. **Custom Domain**
   - Go to Site Settings → Domain management
   - Add your custom domain

## Static Export

For static hosting (GitHub Pages, AWS S3, etc.):

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy the `out` folder**
   - The static files will be in the `out` directory
   - Upload these to your static hosting provider

### GitHub Pages Example:

```bash
npm run build
# The out folder contains your static site
# Push the out folder to gh-pages branch
```

## Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t devblog .
docker run -p 3000:3000 devblog
```

## Environment Variables

If you need environment variables in production:

1. Create `.env.production`:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

2. Add to your hosting platform's environment variables

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify dark mode works
- [ ] Test search functionality
- [ ] Check blog post pages render properly
- [ ] Test tag filtering
- [ ] Verify contact form displays correctly
- [ ] Test mobile responsiveness
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Test navigation on all pages
- [ ] Ensure images load properly

## Performance Optimization

After deployment:

1. **Test with Lighthouse**
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Address any issues

2. **Monitor Core Web Vitals**
   - Use Google Search Console
   - Monitor LCP, FID, and CLS

3. **Enable Caching**
   - Configure CDN caching headers
   - Set appropriate cache policies

## Custom Domain Setup

### Vercel:
1. Add domain in Vercel dashboard
2. Add DNS records:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### Netlify:
1. Add domain in Netlify dashboard
2. Update nameservers or add records as instructed

## Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run typecheck`

### Images Not Loading
- Ensure images are in `public` folder
- Check image paths start with `/`
- For production, use environment-specific paths

### 404 Errors
- Verify routes are correct
- Check dynamic routes are properly configured
- Ensure static generation is working

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)
- [Netlify Support](https://www.netlify.com/support/)
