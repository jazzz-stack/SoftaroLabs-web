import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <div className="flex flex-col">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      <article className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {postImage && (
              <div className="aspect-video relative w-full mb-8 rounded-lg overflow-hidden">
                <img
                  src={postImage.imageUrl}
                  alt={post.title}
                  data-ai-hint={postImage.imageHint}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="mb-8">
              <h1 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center text-muted-foreground mb-6 space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="text-sm">
                  {post.readTime} min read
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-6 mb-8">
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {post.excerpt}
                </p>
                <Button variant="default" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  This is where the full blog post content would go. In a real application, 
                  this would be populated from a CMS or markdown files.
                </p>
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Takeaways</h2>
                
                <ul className="space-y-2">
                  <li>• Important point about the topic</li>
                  <li>• Another crucial insight</li>
                  <li>• Best practices to follow</li>
                  <li>• Common pitfalls to avoid</li>
                </ul>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
                
                <p>
                  In conclusion, this topic is crucial for modern software development. 
                  By following these guidelines and best practices, you can improve your 
                  development workflow and deliver better results.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <Link to="/blog">
                  <Button variant="outlined">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button>
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}