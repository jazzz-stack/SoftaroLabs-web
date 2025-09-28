import React from 'react';
import { services } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Cloud, 
  Smartphone, 
  Brush,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Users,
  MessageSquare,
  Eye
} from 'lucide-react';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-12 w-12 text-primary" />,
  'Mobile App Development': <Smartphone className="h-12 w-12 text-primary" />,
  'UI/UX Design': <Brush className="h-12 w-12 text-primary" />,
  'Cloud Solutions': <Cloud className="h-12 w-12 text-primary" />,
};

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements through comprehensive consultation.',
    icon: <Target className="h-8 w-8 text-primary" />
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution before development begins.',
    icon: <Brush className="h-8 w-8 text-primary" />
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Using agile methodologies, we build your solution with continuous testing and quality assurance throughout the process.',
    icon: <Code className="h-8 w-8 text-primary" />
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing maintenance, updates, and technical support to ensure optimal performance.',
    icon: <Zap className="h-8 w-8 text-primary" />
  }
];

const whyChooseUs = [
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Expert Team',
    description: 'Certified professionals with years of industry experience'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business needs'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: '24/7 Support',
    description: 'Ongoing maintenance and technical assistance'
  }
];

export default function ServicesPage() {
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
            <Code className="mr-2 h-4 w-4" />
            Professional Services
          </Badge>

          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Comprehensive software solutions tailored to your business needs.
            From concept to deployment, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                Get Free Consultation <MessageSquare className="ml-2 h-5 w-5" />
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">What We Offer</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end services to transform your ideas into
              powerful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(
                (img) => img.id === service.imageId
              );
              return (
                <Card
                  key={service.title}
                  className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Service Image */}
                  {serviceImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={serviceImage.imageUrl}
                        alt={service.title}
                        data-ai-hint={serviceImage.imageHint}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                          {serviceIcons[service.title]}
                        </div>
                      </div>
                    </div>
                  )}

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-primary font-medium mt-2">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/contact" className="flex-1">
                        <Button className="w-full group-hover:shadow-lg transition-shadow duration-300">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                      <Button variant="outlined" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery from
              concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    {step.icon}
                  </div>
                  <div className="text-6xl font-bold text-primary/20 mb-2">
                    {step.step}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Softaro Labs</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Your Success is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business insight to deliver
              solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
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
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              With Our Expertise
            </span>
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Ready to take your business to the next level? Let's discuss your
            project requirements and create a custom solution that exceeds your
            expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              {/* <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request Free Quote
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                className="bg-white text-primary border-2 border-white hover:bg-gray-100 hover:shadow-lg text-lg px-8 py-6 font-semibold">
                Learn About Our Team
              </Button> */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                Request Free Quote <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}