import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, projects } from '@/lib/data';
import { ArrowRight, Code, Cloud, Smartphone, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-8 w-8 text-primary" />,
  'Mobile App Development': <Smartphone className="h-8 w-8 text-primary" />,
  'UI/UX Design': <Brush className="h-8 w-8 text-primary" />,
  'Cloud Solutions': <Cloud className="h-8 w-8 text-primary" />,
};

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <img
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-black/60"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            Innovative Software Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            At Softaro Labs, we build custom software to elevate your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="mt-8">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer a wide range of services to meet your business needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {serviceIcons[service.title]}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description.substring(0, 100)}...</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A glimpse into some of our successful projects.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => {
              const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
              return (
                <Card key={project.id} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  {projectImage && (
                    <div className="aspect-video relative w-full">
                      <img
                        src={projectImage.imageUrl}
                        alt={project.name}
                        data-ai-hint={projectImage.imageHint}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/portfolio">
              <Button>Explore Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="mt-8">Request a Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}