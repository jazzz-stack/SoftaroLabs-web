import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-headline text-4xl font-bold md:text-5xl mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {postImage && (
          <div className="relative w-full aspect-video max-w-4xl mx-auto mb-12">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              data-ai-hint={postImage.imageHint}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
          <p>{post.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam.
          </p>
          <h2>A Deeper Dive</h2>
          <p>
            Nam scelerisque, odio nonffcitur commodo, enim est tincidunt lacus, no a pharetra odio turpis non diam. Donec iaculis, metus ac vestibulum convallis, nunc nunc pretium lectus, vel scelerisque felis odio in eros. Suspendisse potenti. Vivamus vitae massa eget arcu aliquam dictum. Sed euismod, urna sit amet aliquam lobortis, lacus sem porta orci, in eleifend odio dui non orci.
          </p>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
