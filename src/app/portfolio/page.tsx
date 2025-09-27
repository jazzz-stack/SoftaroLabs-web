import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Browse a selection of our finest work and successful client projects at Softaro Labs.',
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Portfolio</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We take pride in our work. Here are some of the projects we've successfully delivered.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
              return (
                <Card key={project.id} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {projectImage && (
                    <div className="aspect-video relative w-full">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.name}
                        data-ai-hint={projectImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{project.longDescription}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
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
