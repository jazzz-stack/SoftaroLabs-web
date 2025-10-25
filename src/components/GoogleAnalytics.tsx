import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  measurementId: string;
  searchConsoleCode?: string;
  bingVerificationCode?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId, 
  searchConsoleCode, 
  bingVerificationCode 
}) => {
  return (
    <Helmet>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </script>
      
      {/* Google Search Console Verification */}
      {searchConsoleCode && (
        <meta name="google-site-verification" content={searchConsoleCode} />
      )}
      
      {/* Bing Webmaster Tools Verification */}
      {bingVerificationCode && (
        <meta name="msvalidate.01" content={bingVerificationCode} />
      )}
    </Helmet>
  );
};

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string, title?: string, measurementId?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', measurementId || 'G-XXXXXXXXXX', {
      page_title: title,
      page_location: url,
    });
  }
};

export const trackCustomEvent = (action: string, category: string, label?: string, value?: number) => {
  trackEvent(action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common tracking events
export const trackContactFormSubmission = () => {
  trackCustomEvent('form_submit', 'contact', 'contact_form');
};

export const trackJobApplication = (jobTitle: string) => {
  trackCustomEvent('job_application', 'careers', jobTitle);
};

export const trackProjectView = (projectId: string) => {
  trackCustomEvent('project_view', 'portfolio', projectId);
};

export const trackServiceInquiry = (serviceName: string) => {
  trackCustomEvent('service_inquiry', 'services', serviceName);
};

export default GoogleAnalytics;