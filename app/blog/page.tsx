import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllPosts, getAllTags } from '@/lib/posts';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - DevBlog',
  description: 'Read our latest articles on web development, React, Next.js, TypeScript, and more.',
};

export default function BlogPage({ searchParams }: { searchParams: { tag?: string } }) {
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  const selectedTag = searchParams.tag;

  const posts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore articles, tutorials, and insights on modern web development
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Filter by Tag:</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/blog">
              <Badge
                variant={!selectedTag ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
              >
                All
              </Badge>
            </Link>
            {allTags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`}>
                <Badge
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  className="cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {selectedTag && (
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with{' '}
              <strong>{selectedTag}</strong>
            </p>
          </div>
        )}

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No posts found with this tag.</p>
            <Link
              href="/blog"
              className="text-primary hover:underline mt-4 inline-block"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
