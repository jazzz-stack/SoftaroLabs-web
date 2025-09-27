import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Heart, 
  Shield, 
  Users, 
  Lightbulb,
  Award,
  TrendingUp,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  MessageSquare,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly exploring new tools and methodologies to solve complex problems and deliver cutting-edge solutions."
  },
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: "Excellence",
    description: "Quality is not just a goal—it's our standard. Every project receives meticulous attention to detail, rigorous testing, and continuous refinement."
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: "Partnership",
    description: "We work closely with our clients, treating their success as our own and building lasting relationships based on trust, transparency, and mutual respect."
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Reliability",
    description: "Our clients trust us to deliver on time, on budget, and beyond expectations. We take this responsibility seriously and never compromise on our commitments."
  }
];

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '20+', label: 'Team Members' },
  { icon: <Rocket className="h-8 w-8" />, value: '5+', label: 'Years Experience' },
  { icon: <Globe className="h-8 w-8" />, value: '100+', label: 'Projects Delivered' },
  { icon: <Star className="h-8 w-8" />, value: '98%', label: 'Client Satisfaction' },
];

const achievements = [
  'Award-winning design and development team',
  'Certified cloud architects and developers',
  'Agile and DevOps certified professionals',
  'Industry recognition for innovation',
  'ISO 27001 security compliance',
  'Partnership with leading tech companies'
];

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find((img) => img.id === 'about-mission');
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <img
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Users className="mr-2 h-4 w-4" />
            Meet Our Team
          </Badge>
          
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Softaro Labs</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            We are a team of passionate creators, thinkers, and problem-solvers dedicated to 
            delivering excellence in software development and digital innovation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-white/80">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get to Know Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4">Our Mission</Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
                  Empowering Businesses Through Technology
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  At Softaro Labs, we believe technology should empower businesses to reach their full potential. 
                  Our mission is to create innovative, scalable, and user-centric software solutions that drive real results.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We combine cutting-edge technology with deep industry expertise to deliver solutions that 
                  not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Innovation First</h4>
                      <p className="text-sm text-muted-foreground">Cutting-edge solutions for modern challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Client Success</h4>
                      <p className="text-sm text-muted-foreground">Your growth is our primary objective</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">Rigorous testing and attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Long-term Partnership</h4>
                      <p className="text-sm text-muted-foreground">Building lasting relationships with clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {missionImage && (
                <div className="relative">
                  <img
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    data-ai-hint={missionImage.imageHint}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Core Values</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The fundamental principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group text-center border-none shadow-lg bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <CardTitle>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Achievements</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Recognition & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and certification bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Meet the Talented Minds
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals who bring innovation to life and make our vision a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
              return (
                <Card key={member.name} className="group text-center overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="relative mx-auto mb-6">
                      <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg group-hover:border-primary/20 transition-all duration-300">
                        {memberImage && (
                          <AvatarImage 
                            src={memberImage.imageUrl} 
                            alt={member.name}
                            className="object-cover"
                          />
                        )}
                        <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <CardTitle>
                      {member.name}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2 group-hover:bg-primary/10">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription>
                      {member.bio}
                    </CardDescription>
                    <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" variant="ghost" className="w-10 h-10 p-0">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-10 h-10 p-0">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-10 h-10 p-0">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Ready to Work Together?
          </Badge>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Join the many satisfied clients who have transformed their business with our expertise. 
            Let's discuss your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" className="bg-white text-primary border-2 border-white hover:bg-gray-100 hover:shadow-lg text-lg px-8 py-6 font-semibold">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}