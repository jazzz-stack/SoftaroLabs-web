import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Users,
  Heart,
  TrendingUp,
  Laptop,
  PiggyBank,
  Lightbulb,
  Award,
  BookOpen,
  Target,
  ChevronRight,
  Mail,
  ExternalLink,
  Star,
  Building2,
  Globe
} from 'lucide-react';
import { jobPostings, companyBenefits, companyValues } from '@/lib/data';
import type { JobPosting } from '@/lib/types';

const iconMap = {
  Heart,
  Clock,
  TrendingUp,
  DollarSign,
  Calendar,
  Laptop,
  Users,
  PiggyBank,
  Lightbulb,
  Award,
  BookOpen,
  Target
};

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedJobType, setSelectedJobType] = useState<string>('all');

  const departments = Array.from(new Set(jobPostings.map(job => job.department)));
  const jobTypes = Array.from(new Set(jobPostings.map(job => job.type)));

  const filteredJobs = jobPostings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const typeMatch = selectedJobType === 'all' || job.type === selectedJobType;
    return departmentMatch && typeMatch;
  });

  const featuredJobs = jobPostings.filter(job => job.featured);

  const JobCard: React.FC<{ job: JobPosting; featured?: boolean }> = ({ job, featured = false }) => {
    return (
      <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50' : ''}`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl group-hover:text-primary transition-colors font-semibold">
                  {job.title}
                </h3>
                {featured && (
                  <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {job.department}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                {job.experience}
              </div>
            </div>
            <Link to={`/careers/apply/${job.id}`}>
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 group">
                Apply Now
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              Posted {new Date(job.postedDate).toLocaleDateString()}
            </div>
            {job.applicationDeadline && (
              <div className="text-xs text-orange-600 font-medium">
                Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border shadow-sm">
              <Globe className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Join Our Global Team</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Build the Future
              <br />
              <span className="text-4xl md:text-6xl">with Softaro Labs</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join a team of passionate innovators creating cutting-edge solutions that shape the digital landscape. 
              Your next career adventure starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 px-8 py-3 text-lg group"
                onClick={() => {
                  const openPositionsSection = document.getElementById('open-positions');
                  openPositionsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Open Positions
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button 
                variant="outlined" 
                size="lg" 
                className="px-8 py-3 text-lg border-2 hover:bg-primary/5"
                onClick={() => {
                  const cultureSection = document.getElementById('company-culture');
                  cultureSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      {featuredJobs.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Opportunities</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Hot openings that we're actively hiring for. These roles offer exceptional growth opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Company Values Section */}
      <section id="company-culture" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values & Culture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and the culture we've built together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <Card key={value.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe in taking care of our team with benefits that support your health, growth, and well-being.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyBenefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <Card key={benefit.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Jobs Section */}
      <section id="open-positions" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore all our current opportunities and find the perfect role to advance your career.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Department:</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-white/80 backdrop-blur-sm"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Type:</label>
              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-white/80 backdrop-blur-sm"
              >
                <option value="all">All Types</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No positions found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or check back later for new opportunities.
              </p>
              <Button variant="outlined" onClick={() => {setSelectedDepartment('all'); setSelectedJobType('all');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary to-purple-600 text-white border-0 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-24 -translate-x-24" />
            
            <CardContent className="p-12 text-center relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See the Perfect Role?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg group">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outlined" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;