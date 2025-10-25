import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import CommunicationModal from '@/components/ui/CommunicationModal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { contactApi, ContactFormData, ContactResponse } from '@/services/contactApi';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  Calendar,
  ArrowRight,
  HeadphonesIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const contactMethods = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "help@softarolabs.com",
    subtitle: "We respond within 2 hours",
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+91 80 5200 4200",
    subtitle: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Start Chat",
    subtitle: "Available 24/7",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Book a Meeting",
    description: "Schedule a consultation",
    contact: "Schedule Now",
    subtitle: "Free 30-min consultation",
  },
];

const reasons = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: 'Free Consultation',
    description: 'No-obligation discussion about your project'
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: 'Expert Team',
    description: 'Work with certified professionals'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Confidential',
    description: 'Your ideas are safe with us'
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Quick Response',
    description: 'We respond within 2 hours'
  }
];

const services = [
  'Web Development',
  'Mobile App Development', 
  'UI/UX Design',
  'Cloud Solutions',
  'E-commerce Development',
  'Custom Software',
  'API Development',
  'DevOps & Deployment'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<string>('');
  const [isCommModalOpen, setIsCommModalOpen] = useState(false);
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess('');
    
    try {
      // Prepare form data for API
      const contactFormData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        service: formData.service || undefined,
        budget: formData.budget || undefined,
        message: formData.message
      };

      // Submit to API
      const response: ContactResponse = await contactApi.submitContact(contactFormData);
      
      if (response.success) {
        setSubmitted(true);
        setSubmitSuccess(response.message);
        setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
        
        // Reset success state after 10 seconds
        setTimeout(() => {
          setSubmitted(false);
          setSubmitSuccess('');
        }, 10000);
      } else {
        setSubmitError(response.message || 'An error occurred while sending your message.');
        if (response.errors && response.errors.length > 0) {
          setSubmitError(response.errors.join(', '));
        }
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
            <HeadphonesIcon className="mr-2 h-4 w-4" />
            24/7 Support Available
          </Badge>

          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get in
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Ready to start your project? We'd love to hear from you. Let's
            discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => {
                const contactFormSection = document.querySelector('form');
                contactFormSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Free Consultation
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white border-2 border-transparent hover:from-rose-600 hover:via-pink-600 hover:to-fuchsia-700 hover:shadow-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 font-semibold"
              onClick={() => setIsCommModalOpen(true)}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">2hrs</div>
              <div className="text-sm text-white/70">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">5.0</div>
              <div className="text-sm text-white/70">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Multiple Ways to Connect</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              How Would You Like to Connect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the communication method that works best for you. We're
              here to help in any way we can.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group text-center border-none shadow-lg bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {method.icon}
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="font-semibold text-lg mb-2 text-primary">
                    {method.contact}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {method.subtitle}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4">Send us a Message</Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
                  Let's Start Your Project
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2
                  hours with a detailed response.
                </p>
              </div>

              <Card className="shadow-xl border-none">
                <CardContent className="p-8">
                  {submitted && submitSuccess && (
                    <Alert className="mb-6 border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription>
                        <span className="text-green-800">{submitSuccess}</span>
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitError && (
                    <Alert className="mb-6 border-red-200 bg-red-50">
                      <AlertDescription>
                        <span className="text-red-800">{submitError}</span>
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-base font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="company"
                          className="text-base font-medium">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="service"
                          className="text-base font-medium">
                          Service Needed
                        </Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-base font-medium">
                        Project Budget
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <option value="">Select budget range</option>
                        <option value="$100 - $1,000">$100 - $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000">
                          $5,000 - $15,000
                        </option>
                        <option value="$15,000 - $50,000">
                          $15,000 - $50,000
                        </option>
                        <option value="$50,000 - $100,000">
                          $50,000 - $100,000
                        </option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-base font-medium">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="mt-2"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-14 text-lg">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Why Choose Us */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle>Get Direct Access</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Here are all the ways to
                    connect with us.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-primary text-lg font-medium">
                        support@softarolabs.com
                      </p>
                      <p className="text-muted-foreground text-sm">
                        We respond within 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-primary text-lg font-medium">
                        +91 80 5200 4200
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Address</p>
                      <p className="text-muted-foreground">
                        C117, Ground Floor, 2nd Main Road,
                        <br />
                        Palm Paradise
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Global Reach</p>
                      <p className="text-muted-foreground">
                        Serving clients worldwide
                        <br />
                        Remote collaboration available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle>Why Work With Us?</CardTitle>
                  <CardDescription>
                    Here's what you can expect when you partner with Softaro
                    Labs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {reason.icon}
                      <div>
                        <h4 className="font-semibold mb-1">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-lg border-none bg-gradient-to-br from-primary/5 to-secondary/10">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>
                    Explore more about our services and work.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/services">
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-12 text-base">
                      Our Services
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-12 text-base">
                      View Portfolio
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-12 text-base">
                      About Our Team
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Ready to Start?
          </Badge>

          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Don't wait! The perfect time to start your project is now. Let's
            turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 80 5200 4200
            </Button>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-white text-primary border-2 border-white hover:bg-gray-100 hover:shadow-lg text-lg px-8 py-6 font-semibold">
                See Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Communication Modal */}
      <CommunicationModal 
        isOpen={isCommModalOpen} 
        onClose={() => setIsCommModalOpen(false)} 
      />
    </div>
  );
}