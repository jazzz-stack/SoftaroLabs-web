// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Softaro Labs",
  "url": "https://softarolabs.com",
  "logo": "https://softarolabs.com/assets/image/logo.png",
  "description": "Leading software development company specializing in web development, mobile apps, UI/UX design, and cloud solutions.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Softaro Labs Team"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C117, Ground Floor, 2nd Main Road",
    "addressLocality": "Palm Paradise",
    "addressCountry": "India",
    "postalCode": "560001"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 80 5200 4200",
    "contactType": "customer service",
    "email": "support@softarolabs.com",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://www.linkedin.com/company/softarolabs",
    "https://twitter.com/softarolabs",
    "https://github.com/softarolabs"
  ],
  "services": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Digital Transformation"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Softaro Labs",
  "url": "https://softarolabs.com",
  "description": "Professional software development services including web development, mobile apps, and digital solutions.",
  "inLanguage": "en-US",
  "copyrightYear": "2024",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Softaro Labs"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://softarolabs.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Softaro Labs",
  "image": "https://softarolabs.com/assets/image/logo.png",
  "url": "https://softarolabs.com",
  "telephone": "+91 80 5200 4200",
  "email": "support@softarolabs.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C117, Ground Floor, 2nd Main Road",
    "addressLocality": "Palm Paradise",
    "addressCountry": "India",
    "postalCode": "560001"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9716,
    "longitude": 77.5946
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$-$$$",
  "description": "Leading software development company specializing in web development, mobile apps, UI/UX design, and cloud solutions."
};

export const serviceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "url": url,
  "provider": {
    "@type": "Organization",
    "name": "Softaro Labs",
    "url": "https://softarolabs.com"
  },
  "areaServed": "Worldwide",
  "serviceType": "Software Development",
  "category": "Technology Services"
});

export const articleSchema = (
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  modifiedDate?: string,
  author: string = "Softaro Labs",
  imageUrl?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": url,
  "datePublished": publishedDate,
  "dateModified": modifiedDate || publishedDate,
  "author": {
    "@type": "Organization",
    "name": author,
    "url": "https://softarolabs.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Softaro Labs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://softarolabs.com/assets/image/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  ...(imageUrl && {
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    }
  })
});

export const breadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const jobPostingSchema = (job: {
  title: string;
  description: string;
  location: string;
  type: string;
  postedDate: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": job.title,
  "description": job.description,
  "datePosted": job.postedDate,
  "employmentType": job.type.toUpperCase(),
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Softaro Labs",
    "sameAs": "https://softarolabs.com"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": job.location
    }
  },
  "url": job.url,
  "industry": "Software Development",
  "occupationalCategory": "Technology"
});