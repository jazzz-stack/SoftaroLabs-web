import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Code, Smartphone, Brush, Cloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the wide range of software development, design, and cloud services offered by Softaro Labs.',
};

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-10 w-10 text-primary" />,
  'Mobile App Development': <Smartphone className="h-10 w-10 text-primary" />,
  'UI/UX Design': <Brush className="h-10 w-10 text-primary" />,
  'Cloud Solutions': <Cloud className="h-10 w-10 text-primary" />,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From initial concept to final deployment, we provide end-to-end solutions to bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find((img) => img.id === service.imageId);
              const isReversed = index % 2 !== 0;
              return (
                <div key={service.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
                  <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="flex items-center gap-4 mb-4">
                        {serviceIcons[service.title]}
                        <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground">
                      {service.longDescription}
                    </p>
                  </div>
                  {serviceImage && (
                    <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                      <Image
                        src={serviceImage.imageUrl}
                        alt={service.title}
                        data-ai-hint={serviceImage.imageHint}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl object-cover w-full h-auto transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
