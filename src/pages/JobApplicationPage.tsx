import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { trackJobApplication } from '@/components/GoogleAnalytics';
import {
  MapPin,
  Clock,
  Building2,
  TrendingUp,
  ArrowLeft,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPinIcon,
  Link as LinkIcon,
  MessageSquare,
  Calendar,
  Shield,
  Home,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { jobPostings } from '@/lib/data';
import type { JobPosting, JobApplication } from '@/lib/types';

const JobApplicationPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState<Partial<JobApplication>>({
    jobId: jobId || '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    portfolioUrl: '',
    coverLetter: '',
    experience: '',
    availability: '',
    expectedSalary: '',
    workAuthorization: 'yes',
    willingToRelocate: 'maybe'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    if (jobId) {
      const foundJob = jobPostings.find(j => j.id === jobId);
      if (foundJob) {
        setJob(foundJob);
        setFormData(prev => ({ ...prev, jobId }));
      } else {
        navigate('/careers');
      }
    }
  }, [jobId, navigate]);

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.firstName?.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName?.trim()) errors.lastName = 'Last name is required';
      if (!formData.email?.trim()) errors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
      if (!formData.phone?.trim()) errors.phone = 'Phone number is required';
      if (!formData.location?.trim()) errors.location = 'Location is required';
    }
    
    if (step === 2) {
      if (!formData.coverLetter?.trim()) errors.coverLetter = 'Cover letter is required';
      if (!formData.experience?.trim()) errors.experience = 'Experience summary is required';
      if (!formData.availability?.trim()) errors.availability = 'Availability is required';
      if (!formData.resumeFile) errors.resumeFile = 'Resume upload is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof JobApplication, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileUpload = (field: keyof JobApplication, file: File | null) => {
    if (file) {
      // Check file size (5MB = 5 * 1024 * 1024 bytes)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setFormErrors(prev => ({ ...prev, [field]: 'File size must be less than 5MB' }));
        return;
      }
    }
    
    setFormData(prev => ({ ...prev, [field]: file }));
    // Clear any existing error for this field
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Check if it's a valid file type
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (validTypes.includes(fileExtension)) {
        handleFileUpload('resumeFile', file);
      } else {
        setFormErrors(prev => ({ ...prev, resumeFile: 'Please upload a PDF, DOC, or DOCX file' }));
      }
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setCurrentStep(3);
      
      // Track job application submission
      if (job) {
        trackJobApplication(job.title);
      }
    } catch (error) {
      console.error('Application submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Job Not Found</h1>
          <p className="text-muted-foreground mb-4">The job position you're looking for doesn't exist.</p>
          <Link to="/careers">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Thank you for your interest in the <strong>{job.title}</strong> position. 
              We've received your application and will review it carefully. 
              You can expect to hear back from us within 5-7 business days.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We'll send updates to: <strong>{formData.email}</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/careers">
                  <Button variant="outlined">View Other Positions</Button>
                </Link>
                <Link to="/">
                  <Button>Return to Homepage</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Personal Information', icon: User },
    { number: 2, title: 'Application Details', icon: FileText },
    { number: 3, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-14 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/careers" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Link>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-32">
              <CardHeader>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    {job.featured && (
                      <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {job.experience}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Job Description</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Role & Responsibilities</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-900">Why Join Softaro Labs?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Competitive compensation & equity
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Flexible remote work options
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Professional development budget
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Health, dental & vision insurance
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Cutting-edge technology stack
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Collaborative team environment
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Apply for {job.title}</h2>
                  <div className="flex items-center space-x-2">
                    {steps.map((step, index) => (
                      <div key={step.number} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          currentStep >= step.number 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          {currentStep > step.number ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            step.number
                          )}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`w-8 h-px mx-2 ${
                            currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {currentStep === 1 && "Let's start with your basic information"}
                  {currentStep === 2 && "Tell us more about yourself and your interest in this role"}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName || ''}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Your first name"
                          />
                          {formErrors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName || ''}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Your last name"
                          />
                          {formErrors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Mail className="w-4 h-4 inline mr-1" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email || ''}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              formErrors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="your.email@example.com"
                          />
                          {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Phone className="w-4 h-4 inline mr-1" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone || ''}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              formErrors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="+1 (555) 123-4567"
                          />
                          {formErrors.phone && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <MapPinIcon className="w-4 h-4 inline mr-1" />
                          Current Location *
                        </label>
                        <input
                          type="text"
                          value={formData.location || ''}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            formErrors.location ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="City, State/Country"
                        />
                        {formErrors.location && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.location}</p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <LinkIcon className="w-4 h-4 inline mr-1" />
                            LinkedIn Profile
                          </label>
                          <input
                            type="url"
                            value={formData.linkedinUrl || ''}
                            onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="https://linkedin.com/in/yourprofile"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <LinkIcon className="w-4 h-4 inline mr-1" />
                            Portfolio Website
                          </label>
                          <input
                            type="url"
                            value={formData.portfolioUrl || ''}
                            onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="https://yourportfolio.com"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Application Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-1" />
                          Cover Letter *
                        </label>
                        <textarea
                          value={formData.coverLetter || ''}
                          onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                          rows={6}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                            formErrors.coverLetter ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        />
                        {formErrors.coverLetter && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.coverLetter}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {formData.coverLetter?.length || 0} characters
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <TrendingUp className="w-4 h-4 inline mr-1" />
                          Experience Summary *
                        </label>
                        <textarea
                          value={formData.experience || ''}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          rows={4}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                            formErrors.experience ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Briefly describe your relevant experience and key achievements..."
                        />
                        {formErrors.experience && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.experience}</p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Availability *
                          </label>
                          <select
                            value={formData.availability || ''}
                            onChange={(e) => handleInputChange('availability', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                              formErrors.availability ? 'border-red-500' : 'border-gray-300'
                            }`}
                          >
                            <option value="">Select availability</option>
                            <option value="immediately">Immediately</option>
                            <option value="2-weeks">2 weeks notice</option>
                            <option value="1-month">1 month</option>
                            <option value="2-months">2 months</option>
                            <option value="other">Other (please specify in cover letter)</option>
                          </select>
                          {formErrors.availability && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.availability}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Shield className="w-4 h-4 inline mr-1" />
                            Work Authorization
                          </label>
                          <select
                            value={formData.workAuthorization || 'yes'}
                            onChange={(e) => handleInputChange('workAuthorization', e.target.value as 'yes' | 'no' | 'sponsor')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="yes">Authorized to work</option>
                            <option value="sponsor">Require sponsorship</option>
                            <option value="no">Not authorized</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Home className="w-4 h-4 inline mr-1" />
                          Willing to Relocate?
                        </label>
                        <select
                          value={formData.willingToRelocate || 'maybe'}
                          onChange={(e) => handleInputChange('willingToRelocate', e.target.value as 'yes' | 'no' | 'maybe')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="maybe">Open to discussion</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Upload className="w-4 h-4 inline mr-1" />
                          Resume Upload *
                        </label>
                        <div 
                          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                            isDragOver 
                              ? 'border-primary bg-primary/5' 
                              : formErrors.resumeFile 
                                ? 'border-red-500' 
                                : 'border-gray-300 hover:border-primary'
                          }`} 
                          onClick={() => document.getElementById('resume-upload')?.click()}
                          onDragEnter={handleDragEnter}
                          onDragLeave={handleDragLeave}
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                        >
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            {formData.resumeFile ? `Selected: ${formData.resumeFile.name}` : 'Click to upload or drag and drop your resume'}
                          </p>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileUpload('resumeFile', e.target.files?.[0] || null)}
                            className="hidden"
                            id="resume-upload"
                          />
                          <Button 
                            type="button" 
                            variant="outlined" 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              document.getElementById('resume-upload')?.click();
                            }}
                          >
                            {formData.resumeFile ? 'Change File' : 'Choose File'}
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2">
                            PDF, DOC, or DOCX (max 5MB)
                          </p>
                        </div>
                        {formErrors.resumeFile && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.resumeFile}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    <div>
                      {currentStep > 1 && (
                        <Button type="button" variant="outlined" onClick={prevStep}>
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                      )}
                    </div>
                    <div>
                      {currentStep < 2 ? (
                        <Button type="button" onClick={nextStep}>
                          Next Step
                          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                        </Button>
                      ) : (
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application
                              <CheckCircle className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;