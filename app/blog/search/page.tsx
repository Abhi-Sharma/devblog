import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { searchPosts } from '@/lib/posts';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Search - DevBlog',
  description: 'Search through our blog posts.',
};

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const results = query ? searchPosts(query) : [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
            <h1 className="text-4xl font-bold">Search Results</h1>
          </div>
          {query && (
            <p className="text-lg text-muted-foreground">
              Found {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
              <strong>&ldquo;{query}&rdquo;</strong>
            </p>
          )}
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              {query
                ? 'No posts found matching your search.'
                : 'Enter a search query to find posts.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
