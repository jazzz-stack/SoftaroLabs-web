import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, values, and talented team behind Softaro Labs.',
};

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find((img) => img.id === 'about-mission');

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">About Softaro Labs</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            We are a team of passionate creators, thinkers, and problem-solvers dedicated to delivering excellence in software development.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Our mission is to empower businesses with innovative and reliable technology solutions. We strive to build long-lasting partnerships with our clients, helping them navigate the complexities of the digital world and achieve their goals through custom software that is built to last.
              </p>
              <h3 className="font-headline text-2xl font-bold mt-8 mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary font-bold mr-2">✓</span> <strong>Innovation:</strong> We constantly explore new technologies and approaches.</li>
                <li className="flex items-start"><span className="text-primary font-bold mr-2">✓</span> <strong>Quality:</strong> We are committed to the highest standards of craftsmanship.</li>
                <li className="flex items-start"><span className="text-primary font-bold mr-2">✓</span> <strong>Collaboration:</strong> We work as a true extension of your team.</li>
                <li className="flex items-start"><span className="text-primary font-bold mr-2">✓</span> <strong>Integrity:</strong> We believe in transparency and honesty in all our dealings.</li>
              </ul>
            </div>
            {missionImage && (
              <div className="order-1 md:order-2">
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  data-ai-hint={missionImage.imageHint}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet the Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The brilliant minds behind our success.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card key={member.id} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="items-center">
                    <Avatar className="w-24 h-24 mb-4">
                      {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
