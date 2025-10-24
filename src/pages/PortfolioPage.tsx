import React, { useState } from "react";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Eye,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Filter,
  Grid3X3,
  List,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Social Networking",
  "Content Management",
];

const stats = [
  {
    icon: <Award className="h-8 w-8" />,
    value: "100+",
    label: "Projects Completed",
  },
  { icon: <Users className="h-8 w-8" />, value: "50+", label: "Happy Clients" },
  { icon: <Star className="h-8 w-8" />, value: "5.0", label: "Average Rating" },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "95%",
    label: "Success Rate",
  },
];

const featuredProjects = [
  {
    id: "featured-1",
    name: "Enterprise Dashboard",
    description: "A comprehensive analytics dashboard for Fortune 500 company",
    impact: "300% increase in operational efficiency",
    category: "Web Development",
    featured: true,
    link: "#demo", // Demo link for featured project
  },
  {
    id: "featured-2",
    name: "MiNegocio+ B2B Platform",
    description:
      "B2B ordering platform enabling businesses to streamline procurement with personalized offers",
    impact: "1M+ downloads and 40% reduction in procurement costs",
    category: "Mobile App",
    featured: true,
    link: "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio&hl=en_IN", // Demo link for featured project
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-background"
  );

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

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
            <Award className="mr-2 h-4 w-4" />
            Our Work Portfolio
          </Badge>

          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Portfolio
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Discover the innovative solutions we've built for our clients across
            various industries. Each project represents our commitment to
            excellence and innovation.
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
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
              Start Your Project <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Work</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Project Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our most impactful and innovative projects that have
              transformed businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === `project-${index + 1}`
              );
              return (
                <Card
                  key={project.id}
                  className="group relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-primary text-white">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>

                  {projectImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={projectImage.imageUrl}
                        alt={project.name}
                        data-ai-hint={projectImage.imageHint}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <Badge className="mb-2 bg-white/20 text-white border-white/30">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">
                          {project.name}
                        </h3>
                        <p className="text-white/90 mb-2">
                          {project.description}
                        </p>
                        <div className="flex items-center text-sm text-green-400">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span>{project.impact}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/project/${project.id}`} className="flex-1">
                        <Button className="w-full group-hover:shadow-lg transition-shadow duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Case Study
                        </Button>
                      </Link>
                      <Link to={`/project/${project.id}?tab=demo`} className="flex-1">
                        <Button variant="outlined" className="w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
                All Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore our complete portfolio of successful projects
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "ghost"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="text-sm">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-card rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}>
            {filteredProjects.map((project) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.imageId
              );
              return (
                <Card
                  key={project.id}
                  className={`group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    viewMode === "list" ? "flex-row" : ""
                  }`}>
                  {projectImage && (
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list"
                          ? "w-1/3 aspect-square"
                          : "aspect-video w-full"
                      }`}>
                      <img
                        src={projectImage.imageUrl}
                        alt={project.name}
                        data-ai-hint={projectImage.imageHint}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className="bg-primary/90 text-white text-xs">
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Badge>
                      </div>
                    </div>
                  )}

                  <div
                    className={`flex-1 ${
                      viewMode === "list" ? "flex flex-col justify-between" : ""
                    }`}>
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Completed in 2024</span>
                      </div>
                    </CardContent>

                    <CardFooter
                      className={`gap-2 ${
                        viewMode === "list" ? "flex-wrap" : ""
                      }`}>
                      <Link to={`/project/${project.id}`} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full group-hover:shadow-md transition-shadow duration-300">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      </Link>
                      <Link to={`/project/${project.id}?tab=demo`}>
                        <Button 
                          size="sm" 
                          variant="outlined"
                          title="View Live Demo"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filter criteria
              </p>
              <Button onClick={() => setSelectedCategory("All")}>
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Impressed by Our Work?
          </Badge>

          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Ready to Create Your
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Success Story?
            </span>
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Join our satisfied clients and let us transform your vision into a
            remarkable digital solution that drives real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                Discuss Your Project <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                <ArrowRight className="ml-2 h-5 w-5" />
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
