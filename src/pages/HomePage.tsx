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
  MessageSquare,
  ShoppingCart,
  Activity,
  Building2,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-8 w-8 text-primary" />,
  'Mobile App Development': <Smartphone className="h-8 w-8 text-primary" />,
  'UI/UX Design': <Brush className="h-8 w-8 text-primary" />,
  'Cloud Solutions': <Cloud className="h-8 w-8 text-primary" />,
};

const serviceImages: { [key: string]: string } = {
  'Web Development': 'service-web-development-bg',
  'Mobile App Development': 'service-mobile-app-bg',
  'UI/UX Design': 'service-ui-ux-bg',
  'Cloud Solutions': 'service-cloud-solutions-bg',
};

const projectIcons: { [key: string]: React.ReactNode } = {
  'InnovaMart E-Commerce Platform': <ShoppingCart className="h-6 w-6" />,
  'ConnectSphere Social App': <Users className="h-6 w-6" />,
  'DataViz Analytics Dashboard': <BarChart3 className="h-6 w-6" />,
  'QuantumLeap Corporate Site': <Building2 className="h-6 w-6" />,
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
    description: 'Optimized performance with cutting-edge technologies for blazing-fast applications.',
    imageId: 'feature-performance'
  },
  { 
    icon: <Shield className="h-12 w-12 text-primary" />, 
    title: 'Secure & Reliable', 
    description: 'Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.',
    imageId: 'feature-security'
  },
  { 
    icon: <Rocket className="h-12 w-12 text-primary" />, 
    title: 'Scalable Solutions', 
    description: 'Built to grow with your business, from startup to enterprise scale.',
    imageId: 'feature-scalability'
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
            Transforming
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Ideas
            </span>
            <br />
            into Digital Reality
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            We craft exceptional digital experiences that drive business growth.
            From innovative web applications to cutting-edge mobile solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 px-4 py-2">
              <Star className="mr-2 h-4 w-4" />
              Why Choose Us
            </Badge>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
              Built for Performance & Scale
            </h2>
            <p className="text-lg md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We don't just build software; we engineer solutions that
              <span className="font-semibold text-primary">
                {" "}
                propel your business forward
              </span>{" "}
              with cutting-edge technology and innovative design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const featureImage = PlaceHolderImages.find((img) => img.id === feature.imageId);
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                  {/* Background Image */}
                  {featureImage && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <img
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        data-ai-hint={featureImage.imageHint}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-purple-500/40"></div>
                    </div>
                  )}
                  
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-primary/5 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                      <div className="p-2 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white group-hover:from-primary group-hover:to-purple-600 transition-all duration-500">
                        {React.cloneElement(feature.icon as React.ReactElement, {
                          className: "h-8 w-8",
                        })}
                      </div>
                    </div>
                    <div className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      <CardTitle variant="h4">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative z-10 px-6 pb-8">
                    <div className="text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      <CardDescription>{feature.description}</CardDescription>
                    </div>

                    {/* Progress Bar Animation */}
                    <div className="mt-6 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-${
                          index * 200
                        }`}></div>
                    </div>

                    {/* Feature Badge */}
                    <Badge className="mt-4 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      Premium Feature
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Call-to-Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-primary/10 via-purple-500/10 to-teal-500/10 rounded-full mb-6">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-slate-700">
                  Trusted by 20+ companies worldwide
                </span>
              </div>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join the ranks of successful businesses who've chosen our platform
              for their digital transformation journey.
            </p>
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
              From concept to deployment, we handle every aspect of your digital
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => {
              const serviceImage = PlaceHolderImages.find((img) => img.id === serviceImages[service.title]);
              return (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-none bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 hover:scale-105">
                {/* Background Image */}
                {serviceImage && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <img
                      src={serviceImage.imageUrl}
                      alt={serviceImage.description}
                      data-ai-hint={serviceImage.imageHint}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-purple-500/50"></div>
                  </div>
                )}
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-500/30 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm -z-10"></div>

                {/* Floating Background Elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

                <CardHeader className="text-center relative z-10 pb-4">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white group-hover:from-primary group-hover:to-purple-600 transition-all duration-500">
                      {React.cloneElement(
                        serviceIcons[service.title] as React.ReactElement,
                        {
                          className: "h-6 w-6",
                        }
                      )}
                    </div>
                  </div>
                  <div className="group-hover:text-primary transition-colors duration-300">
                    <CardTitle variant="h5">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center relative z-10 px-6 pb-8">
                  <div className="mb-6 text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    <CardDescription>{service.description}</CardDescription>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <Badge
                        key={idx}
                        className="text-xs bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                        {feature.split(" ")[0]}
                      </Badge>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-1 overflow-hidden mb-4">
                    <div
                      className={`h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-${
                        index * 150
                      }`}></div>
                  </div>

                  {/* Hover Badge */}
                  <Badge className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Learn More
                  </Badge>
                </CardContent>
              </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-6">
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
              Every project tells a story of innovation, creativity, and
              technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 2).map((project, index) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.imageId
              );
              return (
                <Card
                  key={project.id}
                  onClick={() => window.open(project.link, '_blank')}
                  className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  {/* Gradient Overlay for Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  
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
                        <div className="flex items-center justify-between">
                          <Badge className="bg-primary/90 flex items-center gap-1">
                            {projectIcons[project.name] && React.cloneElement(projectIcons[project.name] as React.ReactElement, { className: "h-4 w-4" })}
                            Featured Project
                          </Badge>
                          <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                        {projectIcons[project.name]}
                      </div>
                      <div className="group-hover:text-primary transition-colors duration-300">
                        <CardTitle>{project.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="mb-4 group-hover:text-slate-700 transition-colors duration-300">
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                        <span>Impact: Increased engagement by 150%</span>
                      </div>
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs group-hover:bg-primary/20 transition-colors duration-300">
                            {tag.split(' ')[0]}
                          </Badge>
                        ))}
                      </div>
                    </div>
                </CardContent>
              </Card>
            );
            })}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-6">
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
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <CardDescription>"{testimonial.content}"</CardDescription>
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
            Ready to transform your ideas into reality? Let's discuss your
            project and create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white hover:from-amber-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}