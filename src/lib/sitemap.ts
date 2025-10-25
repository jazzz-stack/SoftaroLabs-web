import { blogPosts, projects, jobPostings } from './data';

export const generateDynamicSitemap = (): string => {
  const baseUrl = 'https://softarolabs.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/portfolio', priority: '0.9', changefreq: 'weekly' },
    { url: '/careers', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' }
  ];

  // Dynamic project pages
  const projectPages = projects.map(project => ({
    url: `/project/${project.id}`,
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  }));

  // Dynamic blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    priority: '0.6',
    changefreq: 'yearly',
    lastmod: post.publishedAt || currentDate
  }));

  // Dynamic job application pages
  const jobPages = jobPostings.map(job => ({
    url: `/careers/apply/${job.id}`,
    priority: '0.5',
    changefreq: 'weekly',
    lastmod: job.postedDate || currentDate
  }));

  // Combine all pages
  const allPages = [
    ...staticPages.map(page => ({ ...page, lastmod: currentDate })),
    ...projectPages,
    ...blogPages,
    ...jobPages
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export const generateRobotsTxt = (): string => {
  const baseUrl = 'https://softarolabs.com';
  
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional - 1 second delay between requests)
Crawl-delay: 1

# Specific rules for search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Allow access to important pages
Allow: /about
Allow: /services
Allow: /portfolio
Allow: /careers
Allow: /blog
Allow: /contact

# Block access to admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow crawling of assets
Allow: /assets/
Allow: *.css
Allow: *.js
Allow: *.png
Allow: *.jpg
Allow: *.jpeg
Allow: *.svg
Allow: *.webp`;
};