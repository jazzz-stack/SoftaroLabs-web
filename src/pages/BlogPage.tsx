import React, { useState } from 'react';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock,
  BookOpen,
  TrendingUp,
  Search,
  Filter,
  Tag,
  MessageSquare,
  Eye,
  Star
} from 'lucide-react';

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Cloud Solutions', 'Tech Trends'];

const featuredPost = {
  title: 'The Future of Web Development: Trends to Watch in 2024',
  excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web applications.',
  author: 'Sarah Johnson',
  readTime: 8,
  publishedAt: '2024-01-15',
  category: 'Tech Trends',
  featured: true
};

const stats = [
  { icon: <BookOpen className="h-8 w-8" />, value: '50+', label: 'Articles Published' },
  { icon: <Eye className="h-8 w-8" />, value: '25K+', label: 'Monthly Readers' },
  { icon: <MessageSquare className="h-8 w-8" />, value: '500+', label: 'Comments' },
  { icon: <Star className="h-8 w-8" />, value: '4.8', label: 'Average Rating' },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All'; // Simplified since BlogPost doesn't have tags
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <BookOpen className="mr-2 h-4 w-4" />
            Tech Insights & Tutorials
          </Badge>
          
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Blog</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Insights, tutorials, and thoughts on the latest in software development, 
            technology trends, and digital innovation.
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

          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <BookOpen className="mr-2 h-5 w-5" />
            Start Reading
          </Button>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Article</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Editor's Pick
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular and insightful article this month.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                {heroImage && (
                  <div className="aspect-video md:aspect-square relative overflow-hidden">
                    <img
                      src={heroImage.imageUrl}
                      alt={featuredPost.title}
                      data-ai-hint={heroImage.imageHint}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        <Star className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  <Tag className="mr-1 h-3 w-3" />
                  {featuredPost.category}
                </Badge>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime} min read
                  </div>
                </div>
                <Link to="/blog/future-of-web-development">
                  <Button size="lg" className="w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with our latest insights and tutorials
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-input rounded-md bg-background w-64 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="text-sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
              return (
                <Card key={post.slug} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {postImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={postImage.imageUrl}
                        alt={post.title}
                        data-ai-hint={postImage.imageHint}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className="bg-primary/90 text-white text-xs">
                          <BookOpen className="mr-1 h-3 w-3" />
                          Article
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle>
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.content.substring(0, 150)}...
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        5 min
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button className="w-full group-hover:shadow-md transition-shadow duration-300">
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {setSelectedCategory('All'); setSearchTerm('');}}>
                Show All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Stay Updated
          </Badge>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Never Miss
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              An Update
            </span>
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Subscribe to our newsletter and get the latest articles, tutorials, and tech insights 
            delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            Join 5,000+ developers and designers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}