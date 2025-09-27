import type { Service, Project, BlogPost, TeamMember } from './types';

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites and web applications.',
    longDescription: 'We build robust and scalable web solutions using modern technologies like React, Next.js, and Node.js. From corporate websites to complex e-commerce platforms, we deliver exceptional digital experiences tailored to your business goals. Our focus on clean code and performance optimization ensures your site is fast, reliable, and easy to maintain.',
    imageId: 'service-web-dev',
    features: [
      'Custom web application development',
      'Responsive design and mobile optimization',
      'E-commerce platform development',
      'Content Management Systems (CMS)',
      'Performance optimization and SEO',
      'Ongoing maintenance and support'
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging mobile apps for iOS and Android.',
    longDescription: 'Our team develops native and cross-platform mobile applications that provide a seamless user experience. We handle the entire lifecycle, from ideation and design to development, testing, and deployment on the App Store and Google Play. We specialize in creating apps that are not only beautiful but also functional and user-friendly.',
    imageId: 'service-mobile-app',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'App Store and Google Play deployment',
      'User experience optimization',
      'Push notifications and offline functionality',
      'App analytics and performance monitoring'
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that are both beautiful and functional.',
    longDescription: 'Good design is at the heart of every great product. Our UI/UX design process focuses on understanding your users to create intuitive, accessible, and delightful interfaces. We conduct user research, create wireframes and prototypes, and perform usability testing to ensure the final product meets and exceeds user expectations.',
    imageId: 'service-ui-ux',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing and optimization',
      'Accessibility compliance (WCAG)',
      'Design system creation and maintenance'
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'Leveraging the power of the cloud for scalable and reliable infrastructure.',
    longDescription: 'We help you harness the full potential of cloud computing with providers like AWS, Google Cloud, and Azure. Our services include cloud migration, infrastructure as code, serverless architecture, and CI/CD pipeline implementation. We ensure your application is secure, scalable, and cost-effective.',
    imageId: 'service-cloud',
    features: [
      'Cloud architecture design and implementation',
      'Migration from on-premises to cloud',
      'Serverless application development',
      'DevOps and CI/CD pipeline setup',
      'Security and compliance management',
      'Cost optimization and monitoring'
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'InnovaMart E-Commerce Platform',
    description: 'A cutting-edge e-commerce platform with a focus on user experience and scalability.',
    longDescription: 'InnovaMart is a full-featured e-commerce solution built from the ground up. It includes a custom content management system, a powerful search engine, and a personalized recommendation engine. The platform was designed to handle high traffic and provides a seamless shopping experience across all devices.',
    imageId: 'project-1',
    link: '#',
    tags: ['Web Development', 'UI/UX Design'],
  },
  {
    id: '2',
    name: 'ConnectSphere Social App',
    description: 'A mobile application designed to connect people with shared interests.',
    longDescription: 'ConnectSphere is a social networking app for iOS and Android that helps users discover local events and connect with like-minded individuals. It features real-time chat, event management, and a sophisticated matching algorithm. The UI was designed to be intuitive and engaging to encourage user interaction.',
    imageId: 'project-2',
    link: '#',
    tags: ['Mobile App Development', 'UI/UX Design'],
  },
  {
    id: '3',
    name: 'DataViz Analytics Dashboard',
    description: 'A business intelligence tool for visualizing and analyzing complex datasets.',
    longDescription: 'DataViz is a web-based analytics dashboard that allows businesses to make data-driven decisions. It connects to multiple data sources and provides interactive charts, graphs, and reports. The backend is built on a scalable cloud architecture to process large volumes of data in real-time.',
    imageId: 'project-3',
    link: '#',
    tags: ['Web Development', 'Cloud Solutions'],
  },
  {
    id: '4',
    name: 'QuantumLeap Corporate Site',
    description: 'A sleek and modern corporate website to showcase brand identity.',
    longDescription: 'We redesigned the corporate website for QuantumLeap to reflect their innovative brand. The site features a clean, minimalist design, subtle animations, and a fully responsive layout. It was built on a headless CMS to allow for easy content updates by their marketing team.',
    imageId: 'project-4',
    link: '#',
    tags: ['Web Development', 'UI/UX Design'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    content: 'The web is constantly evolving. In this post, we explore the latest trends shaping the future of web development, from the rise of AI-powered tools to the growing importance of server-side rendering and edge computing. We\'ll discuss how these technologies are changing the way we build websites and what it means for developers and businesses alike...',
    date: '2024-05-15',
    author: 'Jane Doe',
    imageId: 'blog-post-1',
  },
  {
    id: '2',
    slug: 'mastering-microservices-architecture',
    title: 'Mastering Microservices: A Guide to Building Scalable Systems',
    content: 'Microservices architecture offers a powerful way to build large, complex applications that are easy to scale and maintain. However, it also introduces new challenges. This guide covers the fundamental principles of microservices, best practices for designing and implementing them, and common pitfalls to avoid. We share our experiences and lessons learned from building microservices-based systems for our clients...',
    date: '2024-04-22',
    author: 'John Smith',
    imageId: 'blog-post-2',
  },
  {
    id: '3',
    slug: 'design-thinking-for-developers',
    title: 'Why Every Developer Should Learn Design Thinking',
    content: 'Design thinking is a human-centered approach to problem-solving that can help you build better products. It\'s not just for designers. In this article, we explain the core concepts of design thinking and show how developers can apply them to their work. By empathizing with users and iterating on ideas, you can create software that people love to use...',
    date: '2024-03-10',
    author: 'Alex Ray',
    imageId: 'blog-post-3',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    role: 'Founder & CEO',
    bio: 'With a PhD in Computer Science and over 15 years of industry experience, Evelyn founded Softaro Labs to create a company that values innovation, quality, and collaboration. She leads the team with a passion for solving complex problems with elegant solutions.',
    imageId: 'team-member-1',
  },
  {
    id: '2',
    name: 'Benjamin Carter',
    role: 'Head of Engineering',
    bio: 'Ben is a seasoned software architect who ensures that every project we deliver is built on a solid foundation. He is an expert in cloud-native technologies and distributed systems, and he loves mentoring junior developers.',
    imageId: 'team-member-2',
  },
  {
    id: '3',
    name: 'Kai Chen',
    role: 'Lead Product Designer',
    bio: 'Kai has a keen eye for detail and a deep understanding of user psychology. They lead our design team in creating interfaces that are not only beautiful but also intuitive and accessible. Kai believes that great design can change the world.',
    imageId: 'team-member-3',
  },
  {
    id: '4',
    name: 'Marcus Thorne',
    role: 'Principal DevOps Engineer',
    bio: 'Marcus is the mastermind behind our scalable and resilient infrastructure. He specializes in automation, CI/CD, and cloud security, ensuring that our clients\' applications run smoothly and securely 24/7.',
    imageId: 'team-member-4',
  },
];
