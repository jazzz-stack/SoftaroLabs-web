import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, projects } from '@/lib/data';
import { 
  ArrowRight, 
  Code, 
  Cloud, 
  Smartphone, 
  Brush, 
  CheckCircle, 
  Star, 
  Users, 
  Trophy, 
  Zap,
  Shield,
  Rocket,
  Globe,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-8 w-8 text-primary" />,
  'Mobile App Development': <Smartphone className="h-8 w-8 text-primary" />,
  'UI/UX Design': <Brush className="h-8 w-8 text-primary" />,
  'Cloud Solutions': <Cloud className="h-8 w-8 text-primary" />,
};

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '50+', label: 'Happy Clients' },
  { icon: <Trophy className="h-8 w-8" />, value: '100+', label: 'Projects Delivered' },
  { icon: <Star className="h-8 w-8" />, value: '5.0', label: 'Client Rating' },
  { icon: <Globe className="h-8 w-8" />, value: '15+', label: 'Countries Served' },
];

const features = [
  { 
    icon: <Zap className="h-12 w-12 text-primary" />, 
    title: 'Lightning Fast', 
    description: 'Optimized performance with cutting-edge technologies for blazing-fast applications.' 
  },
  { 
    icon: <Shield className="h-12 w-12 text-primary" />, 
    title: 'Secure & Reliable', 
    description: 'Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.' 
  },
  { 
    icon: <Rocket className="h-12 w-12 text-primary" />, 
    title: 'Scalable Solutions', 
    description: 'Built to grow with your business, from startup to enterprise scale.' 
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Softaro Labs transformed our vision into a stunning reality. Their expertise and dedication exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    content: 'Outstanding technical skills and professional service. They delivered our project on time and within budget.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, CreativeHub',
    content: 'The team at Softaro Labs is incredibly talented. They brought fresh ideas and innovative solutions to our project.',
    rating: 5,
  },
];

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroImage && (
          <img
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Rocket className="mr-2 h-4 w-4" />
            Now Accepting New Projects
          </Badge>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Build the
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Future</span>
            <br />with Code
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            We craft exceptional digital experiences that drive business growth. 
            From innovative web applications to cutting-edge mobile solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                <Eye className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Built for Performance & Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just build software; we engineer solutions that propel your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-card to-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we handle every aspect of your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <Card key={service.title} className="group relative overflow-hidden border-none bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {serviceIcons[service.title]}
                  </div>
                  <CardTitle>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature.split(' ')[0]}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-6">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Work</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Projects That Inspire
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project tells a story of innovation, creativity, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 2).map((project, index) => {
              const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
              return (
                <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                  {projectImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={projectImage.imageUrl}
                        alt={project.name}
                        data-ai-hint={projectImage.imageHint}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className="mb-2 bg-primary/90">Featured Project</Badge>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>Impact: Increased user engagement by 150%</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-6">
                <Eye className="mr-2 h-5 w-5" />
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Success Stories</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription>
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Ready to Get Started?
          </Badge>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Ready to transform your ideas into reality? Let's discuss your project and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white hover:from-amber-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-slate-100 via-white to-gray-100 text-primary border-2 border-transparent hover:from-gray-200 hover:via-gray-50 hover:to-slate-200 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}