import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, projects } from '@/lib/data';
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/schemas';
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
  ExternalLink,
  Layout,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDescriptionConfig: { [key: string]: { icon: React.ReactNode; gradientFrom: string; gradientTo: string; borderColor: string; iconColor: string } } = {
  'Mobile App Development': {
    icon: <Smartphone className="h-4 w-4" />,
    gradientFrom: 'from-primary/10',
    gradientTo: 'to-purple-500/10',
    borderColor: 'border-primary/20',
    iconColor: 'text-primary'
  },
  'UI/UX Design': {
    icon: <Brush className="h-4 w-4" />,
    gradientFrom: 'from-purple-500/10',
    gradientTo: 'to-pink-500/10',
    borderColor: 'border-purple-500/20',
    iconColor: 'text-purple-600'
  },
  'Web Development': {
    icon: <Code className="h-4 w-4" />,
    gradientFrom: 'from-blue-500/10',
    gradientTo: 'to-cyan-500/10',
    borderColor: 'border-blue-500/20',
    iconColor: 'text-blue-600'
  },
  'Cloud Solutions': {
    icon: <Cloud className="h-4 w-4" />,
    gradientFrom: 'from-cyan-500/10',
    gradientTo: 'to-teal-500/10',
    borderColor: 'border-cyan-500/20',
    iconColor: 'text-cyan-600'
  },
  'WordPress Development': {
    icon: <Globe className="h-4 w-4" />,
    gradientFrom: 'from-green-500/10',
    gradientTo: 'to-emerald-500/10',
    borderColor: 'border-green-500/20',
    iconColor: 'text-green-600'
  },
  'Shopify Development': {
    icon: <ShoppingCart className="h-4 w-4" />,
    gradientFrom: 'from-orange-500/10',
    gradientTo: 'to-red-500/10',
    borderColor: 'border-orange-500/20',
    iconColor: 'text-orange-600'
  },
  'Wix Development': {
    icon: <Layout className="h-4 w-4" />,
    gradientFrom: 'from-indigo-500/10',
    gradientTo: 'to-purple-500/10',
    borderColor: 'border-indigo-500/20',
    iconColor: 'text-indigo-600'
  }
};

const serviceIcons: { [key: string]: React.ReactNode } = {
  'Web Development': <Code className="h-8 w-8 text-primary" />,
  'Mobile App Development': <Smartphone className="h-8 w-8 text-primary" />,
  'UI/UX Design': <Brush className="h-8 w-8 text-primary" />,
  'Cloud Solutions': <Cloud className="h-8 w-8 text-primary" />,
  'WordPress Development': <Globe className="h-8 w-8 text-primary" />,
  'Shopify Development': <ShoppingCart className="h-8 w-8 text-primary" />,
  'Wix Development': <Layout className="h-8 w-8 text-primary" />,
};

const serviceImages: { [key: string]: string } = {
  'Web Development': 'service-web-development-bg',
  'Mobile App Development': 'service-mobile-app-bg',
  'UI/UX Design': 'service-ui-ux-bg',
  'Cloud Solutions': 'service-cloud-solutions-bg',
  'WordPress Development': 'service-wordpress',
  'Shopify Development': 'service-shopify',
  'Wix Development': 'service-wix',
};

const projectIcons: { [key: string]: React.ReactNode } = {
  'InnovaMart E-Commerce Platform': <ShoppingCart className="h-6 w-6" />,
  'ConnectSphere Social App': <Users className="h-6 w-6" />,
  'DataViz Analytics Dashboard': <BarChart3 className="h-6 w-6" />,
  'QuantumLeap Corporate Site': <Building2 className="h-6 w-6" />,
};

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '80+', label: 'Happy Clients' },
  { icon: <Trophy className="h-8 w-8" />, value: '100+', label: 'Projects Delivered' },
  { icon: <Star className="h-8 w-8" />, value: '5.0', label: 'Client Rating' },
  { icon: <Globe className="h-8 w-8" />, value: '15+', label: 'Countries Served' },
];

const features = [
  { 
    icon: <Zap className="h-16 w-16 text-white" />, 
    title: 'Lightning Fast', 
    description: 'Optimized performance with cutting-edge technologies for blazing-fast applications.',
    imageId: 'feature-performance',
    additionalIcons: [
      { icon: <Activity className="h-5 w-5" />, label: 'High Performance' },
      { icon: <TrendingUp className="h-5 w-5" />, label: 'Speed Optimized' }
    ]
  },
  { 
    icon: <Shield className="h-16 w-16 text-white" />, 
    title: 'Secure & Reliable', 
    description: 'Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.',
    imageId: 'feature-security',
    additionalIcons: [
      { icon: <CheckCircle className="h-5 w-5" />, label: '99.9% Uptime' },
      { icon: <Eye className="h-5 w-5" />, label: 'Monitoring' }
    ]
  },
  { 
    icon: <Rocket className="h-16 w-16 text-white" />, 
    title: 'Scalable Solutions', 
    description: 'Built to grow with your business, from startup to enterprise scale.',
    imageId: 'feature-scalability',
    additionalIcons: [
      { icon: <Building2 className="h-5 w-5" />, label: 'Enterprise Ready' },
      { icon: <Globe className="h-5 w-5" />, label: 'Global Scale' }
    ]
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

  // State for managing expanded features for each service
  const [expandedServices, setExpandedServices] = useState<{ [key: string]: boolean }>({});

  const toggleServiceFeatures = (serviceTitle: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };

  // Component for service description with dynamic icon and styling
  const ServiceDescription = ({ service }: { service: any }) => {
    const config = serviceDescriptionConfig[service.title];
    
    if (!config) {
      return <p className="text-base flex-1">{service.description}</p>;
    }

    return (
      <div className="flex items-start gap-3 text-left">
        <div className="flex-shrink-0 mt-1">
          <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} border ${config.borderColor} group-hover:from-primary/20 group-hover:to-purple-500/20 group-hover:scale-110 transition-all duration-300`}>
            {React.cloneElement(config.icon as React.ReactElement, {
              className: `h-4 w-4 ${config.iconColor}`
            })}
          </div>
        </div>
        <p className="text-base flex-1">{service.description}</p>
      </div>
    );
  };

  // Combined structured data for homepage
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      localBusinessSchema
    ]
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Softaro Labs - Leading Software Development Company | Web & Mobile App Development"
        description="Transform your business with Softaro Labs' expert software development services. We specialize in web development, mobile apps, UI/UX design, and cloud solutions. Get a free consultation today!"
        keywords={[
          'software development company',
          'web development services',
          'mobile app development',
          'UI UX design agency',
          'cloud solutions provider',
          'React development',
          'Node.js development',
          'custom software development',
          'digital transformation',
          'Softaro Labs'
        ]}
        url="https://softarolabs.com"
        type="website"
        schema={combinedSchema}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex pt-10 justify-center overflow-hidden">
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

          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
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
      <section className="py-4 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 px-6 py-3 text-sm font-medium">
              <Star className="mr-2 h-4 w-4" />
              Why Choose Us
            </Badge>
            
            {/* Enhanced Main Heading */}
            <div className="relative mb-8">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative">
                <span className="bg-gradient-to-r from-slate-900 via-primary to-purple-600 bg-clip-text text-transparent">
                  Built for
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Performance
                  </span>
                  <span className="text-slate-800 mx-4">&</span>
                  <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                    Scale
                  </span>
                  
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60"></div>
                </span>
              </h2>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              <div className="absolute -bottom-8 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-500/15 to-rose-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
            
            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                We don't just build software; we 
                <span className="font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mx-2">
                  engineer solutions
                </span>
                that propel your business forward with cutting-edge technology and innovative design.
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-primary/10">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-slate-700">Lightning Fast</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-purple-500/10">
                  <Shield className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Enterprise Security</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-teal-500/10">
                  <Rocket className="h-4 w-4 text-teal-500 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Infinite Scale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const featureImage = PlaceHolderImages.find((img) => img.id === feature.imageId);
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-none shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 cursor-pointer">
                  
                  {/* Simplified Background Image */}
                  {featureImage && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <img
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        data-ai-hint={featureImage.imageHint}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-purple-500/40"></div>
                    </div>
                  )}
                  
                  {/* Single Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Single Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl blur-sm"></div>

                  {/* Reduced Floating Elements - Only 2 instead of 3 */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/15 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-cyan-500/10 to-teal-500/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-800 blur-2xl"></div>

                  <CardHeader className="text-center pb-6 relative z-10 pt-6">
                    {/* Enhanced Icon Container */}
                    <div className="mx-auto mb-6 relative">
                      {/* Enhanced Glow Ring */}
                      <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Main Icon Container */}
                      <div className="relative flex h-28 w-28 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-slate-100/90 via-white/95 to-primary/15 group-hover:from-primary/10 group-hover:via-purple-50/95 group-hover:to-cyan-50/90 group-hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/60 group-hover:border-primary/20">
                        
                        {/* Icon Background Circle */}
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-500 text-white group-hover:from-cyan-500 group-hover:via-primary group-hover:to-purple-500 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          {/* Dynamic Icon Rendering */}
                          {React.cloneElement(feature.icon as React.ReactElement, {
                            className: "h-12 w-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg",
                          })}
                        </div>
                        
                        {/* Icon Accent Ring */}
                        <div className="absolute inset-2 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Simplified Title */}
                    <div className="relative">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      {/* Simple Underline */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-primary transition-all duration-500 rounded-full"></div>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center relative z-10 px-6 pb-8">
                    {/* Enhanced Description with Icons */}
                    <div className="text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300 mb-6">
                      <p>{feature.description}</p>
                    </div>

                    {/* Feature Icons Row */}
                    <div className="flex justify-center gap-6 mb-6">
                      {feature.additionalIcons?.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center group/icon">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 group-hover:from-primary/20 group-hover:to-purple-500/20 group/icon:scale-110 transition-all duration-300 mb-2 shadow-lg">
                            <div className="text-primary group-hover:text-purple-600 transition-colors duration-300">
                              {item.icon}
                            </div>
                          </div>
                          <span className="text-xs text-slate-500 group-hover:text-slate-600 font-medium transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Simple Progress Bar */}
                    <div className="relative mb-4">
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-${index * 100}`}
                        ></div>
                      </div>
                    </div>

                    {/* Simple Feature Badge */}
                    <Badge className="bg-primary/10 text-primary border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
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
      <section className="pb-5 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-purple-500/5 to-cyan-500/5"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/15 to-violet-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 px-8 py-4 text-base font-semibold">
              <Code className="mr-3 h-5 w-5" />
              Our Expertise
            </Badge>
            
            <div className="relative mb-8">
              <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
                <span className="bg-gradient-to-r from-slate-900 via-primary to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                  Complete Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  Solutions
                </span>
                
                {/* Enhanced Glow Effects */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -top-4 -right-12 w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-full blur-xl animate-pulse delay-700"></div>
                <div className="absolute -bottom-6 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we handle every aspect of your digital transformation with 
              <span className="font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent mx-2">
                cutting-edge technology
              </span>
              and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => {
              const serviceImage = PlaceHolderImages.find((img) => img.id === serviceImages[service.title]);
              return (
                <Card
                  key={service.title}
                  className="group relative overflow-hidden border-none bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 shadow-xl h-full min-h-[400px] flex flex-col">
                  {/* Enhanced Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-md"></div>

                  {/* Dynamic Background Image */}
                  {serviceImage && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <img
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        data-ai-hint={serviceImage.imageHint}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-purple-500/60"></div>
                    </div>
                  )}

                  {/* Enhanced Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                  {/* Animated Particles */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/15 to-purple-500/15 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl animate-spin-slow"></div>
                  <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-pink-500/8 to-violet-500/8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl animate-pulse"></div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-slate-200/60 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-slate-300/30">
                      <div
                        className={`h-full bg-gradient-to-r from-primary via-cyan-400 to-purple-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-${
                          index * 150
                        } shadow-lg shadow-primary/30`}></div>
                    </div>
                    {/* Progress Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-400/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </div>
                  <CardContent className="text-center relative z-10 px-6 pb-8 flex-grow flex flex-col h-full">
                    {/* Enhanced Description - 20% height */}
                    <div className="h-[20%] flex items-center justify-center">
                      <ServiceDescription service={service} />
                    </div>

                    {/* Enhanced Feature Pills - 65% height */}
                    <div className="h-[65%] flex flex-col justify-start">
                      <div
                        className={`flex flex-wrap gap-3 justify-center px-3 transition-all duration-500 h-full ${
                          expandedServices[service.title]
                            ? "overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
                            : "overflow-hidden"
                        }`}>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="relative">
                            <Badge className="text-xs bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20 backdrop-blur-sm group-hover:from-primary/20 group-hover:to-purple-500/20 group-hover:scale-105 group-hover:text-primary transition-all duration-300 px-3 py-1">
                              {feature}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row - 15% height */}
                    <div className="h-[15%] flex items-center justify-center gap-3">
                      {/* Show More/Less Button */}
                      {service.features.length > 3 && (
                        <button
                          onClick={() => toggleServiceFeatures(service.title)}
                          className="flex items-center font-medium text-white bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 border border-primary/30 rounded-full px-4 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:from-cyan-500 group-hover:to-teal-500"
                          style={{ fontSize: '10px' }}>
                          {expandedServices[service.title] ? (
                            <>
                              <span>Show Less</span>
                              <ChevronUp className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              <span>
                                Show More ({service.features.length - 3})
                              </span>
                              <ChevronDown className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      )}

                      {/* Explore Technology Button */}
                      <button
                        onClick={() => window.open("/services", "_self")}
                        className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 px-4 rounded-full hover:from-primary/20 hover:to-purple-500/20 hover:scale-105 cursor-pointer flex items-center gap-2"
                        style={{ fontSize: '10px' }}>
                        <ArrowRight className="h-4 w-4" />
                        <span>Explore Technology</span>
                      </button>
                    </div>
                  </CardContent>

                  {/* Enhanced Scan Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-300"></div>
                </Card>
              );
            })}
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center mt-16">
            <div className="relative inline-block">
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <Link to="/services">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold border border-emerald-400/20">
                  <Globe className="mr-3 h-6 w-6" />
                  Explore All Technologies
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-4 bg-background">
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
      <section className="py-4 bg-gradient-to-br from-primary/5 to-secondary/20">
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
      <section className="py-4 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
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