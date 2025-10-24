import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Eye, 
  Star, 
  Calendar, 
  Users, 
  TrendingUp,
  CheckCircle,
  Play,
  Image as ImageIcon,
  Code,
  Smartphone,
  Monitor,
  MessageSquare
} from 'lucide-react';

const featuredProjectsData = [
  {
    id: "featured-1",
    name: "Enterprise Dashboard",
    description: "A comprehensive analytics dashboard for Fortune 500 company",
    longDescription:
      "This enterprise-grade dashboard revolutionizes how large corporations visualize and analyze their operational data. Built with cutting-edge technologies, it provides real-time insights across multiple business units, featuring advanced data visualization, predictive analytics, and customizable reporting capabilities.",
    impact: "300% increase in operational efficiency",
    category: "Web Development",
    featured: true,
    link: "https://enterprise-demo.softarolabs.com",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    clientTestimonial:
      "Softaro Labs transformed our data analysis capabilities. The dashboard is intuitive, powerful, and has significantly improved our decision-making process.",
    projectDuration: "6 months",
    teamSize: "8 developers",
    challenges: [
      "Complex data integration",
      "Real-time performance",
      "Scalable architecture",
    ],
    solutions: [
      "Microservices architecture",
      "WebSocket implementation",
      "Optimized database queries",
    ],
    imageId: "project-1",
  },
  {
    id: "featured-2",
    name: "MiNegocio+ B2B Platform",
    description:
      "B2B ordering platform enabling businesses to streamline procurement with personalized offers and rewards",
    longDescription:
      "MiNegocio+ is a comprehensive B2B mobile platform that revolutionizes business-to-business commerce by enabling companies to efficiently order products, access exclusive business offers, and manage supplier relationships. Designed specifically for business customers, the app streamlines procurement processes, provides volume-based pricing, bulk ordering capabilities, and enterprise-grade account management with enhanced security and compliance features.",
    impact: "1M+ downloads and 40% reduction in procurement costs",
    category: "Mobile App",
    featured: true,
    link: "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio&hl=en_IN",
    technologies: [
      "React Native",
      "Android",
      "iOS",
      "TypeScript",
      "Jest",
      "AppDynamics",
      "OpenCV",
      "GraphQL",
      "Video SDK",
      "Airship Push Notifications",
      "Firebase",
      "Payment Gateway",
      "TrustArc",
    ],
    clientTestimonial:
      "MiNegocio+ transformed our B2B procurement process. Our business partners can now order products seamlessly, access volume discounts, and manage their accounts efficiently, resulting in stronger supplier relationships and significant cost savings.",
    projectDuration: "2 Years",
    teamSize: "15 developers",
    challenges: [
      "Enterprise-grade security and compliance",
      "B2B-specific pricing and catalog management",
      "Multi-tenant architecture for business accounts",
    ],
    solutions: [
      "Role-based access control and audit trails",
      "Dynamic pricing engine for bulk orders",
      "Scalable multi-tenant infrastructure",
    ],
    imageId: "project-2",
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') as 'overview' | 'demo' | 'casestudy' | null;
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'casestudy'>(tabFromUrl || 'overview');
  
  // Find project from either regular projects or featured projects
  const regularProject = projects.find(p => p.id === id);
  const featuredProject = featuredProjectsData.find(p => p.id === id);
  const project = featuredProject || regularProject;
  
  useEffect(() => {
    if (tabFromUrl) {
      // If trying to access demo tab for in-development project, redirect to overview
      if (tabFromUrl === 'demo' && (project as any)?.status === 'in-development') {
        setActiveTab('overview');
      } else {
        setActiveTab(tabFromUrl);
      }
    }
  }, [tabFromUrl, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
  const isFeatured = 'featured' in project && project.featured;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {projectImage && (
          <img
            src={projectImage.imageUrl}
            alt={project.name}
            data-ai-hint={projectImage.imageHint}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Link to="/portfolio" className="inline-flex items-center mb-6 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          {isFeatured && (
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Star className="mr-2 h-4 w-4" />
              Featured Project
            </Badge>
          )}

          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {project.name}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            {project.description}
          </p>

          {isFeatured && 'impact' in project && (
            <div className="flex items-center justify-center text-lg text-green-400 mb-8">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>{project.impact}</span>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeTab === 'overview' ? 'default' : 'secondary'}
              onClick={() => setActiveTab('overview')}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <Eye className="mr-2 h-4 w-4" />
              Project Overview
            </Button>
            <Button
              variant={activeTab === 'demo' ? 'default' : 'secondary'}
              onClick={() => (project as any)?.status !== 'in-development' && setActiveTab('demo')}
              disabled={(project as any)?.status === 'in-development'}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button
              variant={activeTab === 'casestudy' ? 'default' : 'secondary'}
              onClick={() => setActiveTab('casestudy')}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {activeTab === 'overview' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-6">Project Details</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Technologies */}
                  {isFeatured && 'technologies' in project && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Regular project tags */}
                  {!isFeatured && 'tags' in project && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenges & Solutions for featured projects */}
                  {isFeatured && 'challenges' in project && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-destructive mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Stats */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {isFeatured && 'projectDuration' in project && (
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-muted-foreground mr-3" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-sm text-muted-foreground">{project.projectDuration}</p>
                          </div>
                        </div>
                      )}
                      {isFeatured && 'teamSize' in project && (
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-muted-foreground mr-3" />
                          <div>
                            <p className="font-medium">Team Size</p>
                            <p className="text-sm text-muted-foreground">{project.teamSize}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Monitor className="h-5 w-5 text-muted-foreground mr-3" />
                        <div>
                          <p className="font-medium">Category</p>
                          <p className="text-sm text-muted-foreground">
                            {isFeatured ? project.category : (project as any).tags?.[0] || 'Web Development'}
                          </p>
                        </div>
                      </div>
                      <div className="pt-4">
                        <div className="flex flex-col gap-3">
                          {(project as any).status === 'in-development' ? (
                            <>
                              <Button 
                                className="w-full"
                                disabled
                                variant="outlined"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Coming Soon
                              </Button>
                              <Link to="/contact">
                                <Button variant="outlined" className="w-full">
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  Start Similar Project
                                </Button>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Button 
                                className="w-full"
                                onClick={() => window.open(project.link, '_blank')}
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Live
                              </Button>
                              <Link to="/contact">
                                <Button variant="outlined" className="w-full">
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  Start Similar Project
                                </Button>
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Client Testimonial */}
              {isFeatured && 'clientTestimonial' in project && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "{project.clientTestimonial}"
                    </blockquote>
                    <p className="font-semibold">— Satisfied Client</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Live Demo</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the project in action. Click below to view the live demonstration.
              </p>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-12 mb-8">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold mb-4">Interactive Demo</h3>
                <p className="text-muted-foreground mb-6">
                  Click the button below to launch the live demo in a new tab and explore all features.
                </p>
                <Button 
                  size="lg"
                  onClick={() => window.open(project.link, '_blank')}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Launch Demo
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Desktop Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized for desktop browsers with full functionality
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Mobile Responsive</h4>
                    <p className="text-sm text-muted-foreground">
                      Fully responsive design that works on all devices
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'casestudy' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Case Study</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <h3>Project Background</h3>
                <p className="text-muted-foreground">
                  {project.longDescription || project.description}
                </p>

                {isFeatured && (
                  <>
                    <h3>The Challenge</h3>
                    <p className="text-muted-foreground">
                      Our client needed a comprehensive solution that could handle complex requirements while maintaining excellent user experience. The main challenges included:
                    </p>
                    <ul className="text-muted-foreground">
                      {'challenges' in project && project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>

                    <h3>Our Solution</h3>
                    <p className="text-muted-foreground">
                      We developed a cutting-edge solution using modern technologies and best practices:
                    </p>
                    <ul className="text-muted-foreground">
                      {'solutions' in project && project.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>

                    <h3>Results</h3>
                    <p className="text-muted-foreground">
                      The project delivered exceptional results: {project.impact}
                    </p>
                  </>
                )}

                {!isFeatured && (
                  <>
                    <h3>Project Scope</h3>
                    <p className="text-muted-foreground">
                      This project involved creating a comprehensive solution that meets modern web standards and user expectations. We focused on delivering a high-quality product that provides excellent user experience and robust functionality.
                    </p>

                    <h3>Technical Implementation</h3>
                    <p className="text-muted-foreground">
                      The project was built using modern technologies and follows industry best practices for scalability, security, and performance.
                    </p>
                  </>
                )}
              </div>

              {/* Project Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {projectImage && (
                  <>
                    <Card className="overflow-hidden">
                      <img
                        src={projectImage.imageUrl}
                        alt={`${project.name} Screenshot 1`}
                        className="w-full h-64 object-cover"
                      />
                      <CardContent className="p-4">
                        <h4 className="font-semibold">Main Interface</h4>
                        <p className="text-sm text-muted-foreground">Primary user interface design</p>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                      <img
                        src={projectImage.imageUrl}
                        alt={`${project.name} Screenshot 2`}
                        className="w-full h-64 object-cover filter hue-rotate-30"
                      />
                      <CardContent className="p-4">
                        <h4 className="font-semibold">Features Overview</h4>
                        <p className="text-sm text-muted-foreground">Key functionality showcase</p>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in a Similar Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can create something amazing for your business too.
                </p>
                <Link to="/contact">
                  <Button size="lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}