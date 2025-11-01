import React, { useState } from 'react';
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
  Eye,
  ChevronDown,
  ChevronUp,
  Globe,
  ShoppingCart,
  Layout
} from 'lucide-react';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-12 w-12 text-primary" />,
  'Mobile App Development': <Smartphone className="h-12 w-12 text-primary" />,
  'UI/UX Design': <Brush className="h-12 w-12 text-primary" />,
  'Cloud Solutions': <Cloud className="h-12 w-12 text-primary" />,
  'WordPress Development': <Globe className="h-12 w-12 text-primary" />,
  'Shopify Development': <ShoppingCart className="h-12 w-12 text-primary" />,
  'Wix Development': <Layout className="h-12 w-12 text-primary" />,
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
  const [expandedServices, setExpandedServices] = useState<{ [key: string]: boolean }>({});

  const toggleServiceFeatures = (serviceTitle: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };
  
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">What We Offer</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end services to transform your ideas into
              powerful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(
                (img) => img.id === service.imageId
              );
              return (
                <Card
                  key={service.title}
                  className="group relative overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Compact Service Image Header */}
                  {serviceImage && (
                    <div className="h-32 relative overflow-hidden">
                      <img
                        src={serviceImage.imageUrl}
                        alt={service.title}
                        data-ai-hint={serviceImage.imageHint}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                          {React.cloneElement(serviceIcons[service.title] as React.ReactElement, { 
                            className: "h-5 w-5 text-white" 
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      {!serviceImage && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          {React.cloneElement(serviceIcons[service.title] as React.ReactElement, { 
                            className: "h-6 w-6 text-primary" 
                          })}
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle>
                          <span className="text-lg group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </span>
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription>
                      <span className="text-sm leading-relaxed">
                        {service.description}
                      </span>
                    </CardDescription>
                  </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground">
                      Key Features:
                    </h4>
                    <div className="space-y-2">
                      {service.features
                        .slice(0, expandedServices[service.title] ? service.features.length : 3)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      {service.features.length > 3 && (
                        <button
                          onClick={() => toggleServiceFeatures(service.title)}
                          className="flex items-center gap-1 text-xs text-primary font-medium mt-2 hover:text-primary/80 transition-colors cursor-pointer"
                        >
                          {expandedServices[service.title] ? (
                            <>
                              <ChevronUp className="h-3 w-3" />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3 w-3" />
                              +{service.features.length - 3} more
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to="/contact" className="flex-1">
                      <Button size="sm" className="w-full text-xs">
                        Get Started
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                    <Button 
                      size="sm"
                      variant="outlined" 
                      className="flex-1 text-xs"
                      onClick={() => {
                        const processSection = document.getElementById('process-section');
                        processSection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
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
      <section id="process-section" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-center h-8 w-8 mx-auto mb-2 rounded-lg bg-primary/10">
                  {React.cloneElement(step.icon, { className: "h-4 w-4 text-primary" })}
                </div>
                <div className="text-lg font-bold text-primary/40 mb-1">
                  {step.step}
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
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