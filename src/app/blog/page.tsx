import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news, articles, and insights from the team at Softaro Labs.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Blog</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Stay updated with the latest industry trends, tutorials, and company news.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
              return (
                <Card key={post.id} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {postImage && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video relative w-full">
                        <Image
                          src={postImage.imageUrl}
                          alt={post.title}
                          data-ai-hint={postImage.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-2">
                       <div className="flex items-center gap-1">
                         <Calendar className="h-4 w-4" />
                         <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                       </div>
                       <div className="flex items-center gap-1">
                         <User className="h-4 w-4" />
                         <span>{post.author}</span>
                       </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.content.substring(0, 120)}...</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="p-0 h-auto">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
