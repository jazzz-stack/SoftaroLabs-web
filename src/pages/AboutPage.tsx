import React, { useRef } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { teamMembers } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovation",
    description:
      "We stay at the forefront of technology, constantly exploring new tools and methodologies to solve complex problems and deliver cutting-edge solutions.",
  },
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: "Excellence",
    description:
      "Quality is not just a goal—it's our standard. Every project receives meticulous attention to detail, rigorous testing, and continuous refinement.",
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: "Partnership",
    description:
      "We work closely with our clients, treating their success as our own and building lasting relationships based on trust, transparency, and mutual respect.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Reliability",
    description:
      "Our clients trust us to deliver on time, on budget, and beyond expectations. We take this responsibility seriously and never compromise on our commitments.",
  },
];

const stats = [
  { icon: <Users className="h-8 w-8" />, value: "20+", label: "Team Members" },
  {
    icon: <Rocket className="h-8 w-8" />,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "100+",
    label: "Projects Delivered",
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: "98%",
    label: "Client Satisfaction",
  },
];

const achievements = [
  "Award-winning design and development team",
  "Certified cloud architects and developers",
  "Agile and DevOps certified professionals",
  "Industry recognition for innovation",
  "ISO 27001 security compliance",
  "Partnership with leading tech companies",
];

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find(
    (img) => img.id === "about-mission"
  );
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "hero-background"
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Width of one card plus gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Width of one card plus gap
        behavior: 'smooth'
      });
    }
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
            <Users className="mr-2 h-4 w-4" />
            Meet Our Team
          </Badge>
{/* Builder like Elementor, Avada, WP Bakery, Bold Builder, Gutenberg */}
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Softaro Labs
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            We are a team of passionate creators, thinkers, and problem-solvers
            dedicated to delivering excellence in software development and
            digital innovation.
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
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white hover:from-amber-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
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
                  At Softaro Labs, we believe technology should empower
                  businesses to reach their full potential. Our mission is to
                  create innovative, scalable, and user-centric software
                  solutions that drive real results.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We combine cutting-edge technology with deep industry
                  expertise to deliver solutions that not only meet today's
                  needs but anticipate tomorrow's challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Innovation First</h4>
                      <p className="text-sm text-muted-foreground">
                        Cutting-edge solutions for modern challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Client Success</h4>
                      <p className="text-sm text-muted-foreground">
                        Your growth is our primary objective
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">
                        Rigorous testing and attention to detail
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Long-term Partnership
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Building lasting relationships with clients
                      </p>
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
              The fundamental principles that guide everything we do and shape
              our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group text-center border-none shadow-lg bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription>{value.description}</CardDescription>
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
              Our commitment to excellence has been recognized by industry
              leaders and certification bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
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
      <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 shadow-lg">
              <Users className="mr-2 h-4 w-4" />
              Our Team
            </Badge>
            <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Meet the Talented Minds
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate individuals who bring innovation to life and make our vision a reality. 
              Each team member brings unique expertise and creativity to every project.
            </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
              <Star className="mx-4 h-5 w-5 text-primary" />
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
            </div>
          </div>

          {/* Horizontal Scrollable Team Grid with Side Controls */}
          <div className="relative flex items-center">
            {/* Left Scroll Button */}
            <div className="absolute left-0 z-30 -translate-x-6">
              <button
                onClick={scrollLeft}
                className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <ChevronLeft className="relative z-10 h-5 w-5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                
                {/* Focus ring */}
                <div className="absolute inset-0 rounded-xl ring-2 ring-primary/0 group-hover:ring-primary/20 transition-all duration-300"></div>
              </button>
            </div>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-4 px-12 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}>
              {teamMembers.map((member, index) => {
                const memberImage = PlaceHolderImages.find(
                  (img) => img.id === member.imageId
                );
                
                return (
                  <Card
                    key={member.name}
                    className="group relative text-center overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-1 transform-gpu flex-shrink-0 w-80 snap-center">
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-all duration-700 blur-sm"></div>

                    {/* Enhanced image section */}
                    <div className="relative pt-8 pb-4">
                      <div className="relative mx-auto mb-6 w-36 h-20">
                        {/* Animated background ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 group-hover:rotate-180"></div>

                        {/* Main image */}
                        <img
                          src={memberImage?.imageUrl}
                          alt={member.name}
                          className="relative z-10 w-36 h-36 rounded-full border-4 border-white shadow-2xl object-cover mx-auto transition-all duration-700 group-hover:border-primary/50 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/144x144/4f46e5/ffffff?text=${member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}`;
                          }}
                        />

                        {/* Enhanced star badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg">
                          <Star className="h-5 w-5 text-white fill-current" />
                        </div>

                        {/* Floating particles effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <div className="absolute top-8 right-6 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
                          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="relative z-10 pb-2 pt-0">
                      <CardTitle>{member.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="mt-3 bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 border-primary/20 transition-all duration-300">
                        {member.role}
                      </Badge>
                    </CardHeader>

                    <CardContent className="relative z-10 px-6 pb-8">
                      <div className="text-sm leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                        <CardDescription>{member.bio}</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            <div className="absolute right-0 z-30 translate-x-6">
              <button
                onClick={scrollRight}
                className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <ChevronRight className="relative z-10 h-5 w-5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                
                {/* Focus ring */}
                <div className="absolute inset-0 rounded-xl ring-2 ring-primary/0 group-hover:ring-primary/20 transition-all duration-300"></div>
              </button>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-20">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Join Our Team</h3>
                <p className="text-muted-foreground mb-6">Want to be part of our amazing team? We're always looking for talented individuals.</p>
                
                {/* LinkedIn Company Badge */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="badge-base LI-profile-badge" 
                    data-locale="en_US" 
                    data-size="large" 
                    data-theme="light" 
                    data-type="HORIZONTAL" 
                    data-vanity="softaro-labs-498012391" 
                    data-version="v1">
                    <a 
                      className="badge-base__link LI-simple-link" 
                      href="https://in.linkedin.com/in/softaro-labs-498012391?trk=profile-badge">
                      Softaro Labs
                    </a>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg w-full">
                    View Career Opportunities
                  </Button>
                </Link>
              </div>
            </div>
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
            Join the many satisfied clients who have transformed their business
            with our expertise. Let's discuss your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6">
                Start a Conversation <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
