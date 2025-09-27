import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
              <h2 className="font-headline text-3xl font-bold md:text-4xl mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Softaro Labs, we believe technology should empower businesses to reach their full potential. Our mission is to create innovative, scalable, and user-centric software solutions that drive real results.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <div className="order-1 md:order-2">
              {missionImage && (
                <img
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  data-ai-hint={missionImage.imageHint}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We stay at the forefront of technology, constantly exploring new tools and methodologies to solve complex problems.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Excellence is not just a goal—it's our standard. Every project receives meticulous attention to detail and rigorous testing.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We work closely with our clients, treating their success as our own and building lasting relationships based on trust and transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              The talented individuals who bring our vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card key={member.name}>
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      {memberImage && (
                        <AvatarImage 
                          src={memberImage.imageUrl} 
                          alt={member.name}
                        />
                      )}
                      <AvatarFallback className="text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
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