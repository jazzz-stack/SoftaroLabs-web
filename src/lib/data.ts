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
    id: "1",
    name: "Direct Paramed Customer",
    description:
      "An on-demand mobile healthcare platform connecting patients with certified healthcare professionals for home-based medical services.",
    longDescription:
      "Direct Paramed Customer is a revolutionary mobile healthcare application that brings medical services directly to patients' homes or offices. The platform connects users with certified allied healthcare professionals for various medical services including phlebotomy (blood draws), drug screening, life insurance medical exams, and health screenings. Key features include on-demand service requests, real-time provider notifications, specimen tracking with shipping details, no-insurance lab ordering options, 24/7 drug screening availability, and customizable health events for organizations. The app helps reduce infection risks by eliminating the need to visit crowded medical facilities, offers same-day service with certified professionals, and provides a comprehensive platform for both individual and business healthcare needs. All services maintain strict privacy protocols and chain of custody requirements for medical specimens.",
    imageId: "project-1",
    link: "https://play.google.com/store/apps/details?id=com.directparamed",
    tags: ["Mobile App Development", "Healthcare", "UI/UX Design"],
  },
  {
    id: "2",
    name: "Direct Paramed Provider",
    description:
      "A mobile health solutions app that connects allied healthcare professionals with on-demand medical services.",
    longDescription:
      "Direct Paramed Provider is an innovative mobile application that empowers allied healthcare professionals to work autonomously and provide on-demand medical services. The app brings healthcare directly to patients by connecting certified phlebotomists, medical assistants, and other healthcare professionals with customers who need post-medical diagnostic care and additional allied services. Key features include instant notifications for service requests within a 30-mile radius, transparent pricing and distance information, safety protocols with cancellation options, automatic GPS directions, specimen tracking, and detailed service completion reports. The platform supports various healthcare certifications including phlebotomy, medical assistant, EKG, CPR, and more. Providers undergo a thorough vetting process and receive weekly direct deposit payments, making it an ideal solution for healthcare professionals seeking flexible work opportunities.",
    imageId: "project-2",
    link: "https://play.google.com/store/apps/details?id=com.directparameddriver",
    tags: ["Mobile App Development", "Healthcare", "UI/UX Design"],
  },
  {
    id: "3",
    name: "Dwiggydoo Pet Social Network",
    description:
      "A comprehensive social networking platform designed specifically for pet owners and animal lovers. Currently in active development.",
    longDescription:
      "Dwiggydoo is an innovative pet social networking platform that connects pet owners worldwide. The platform allows users to create profiles for their pets, connect with other pet owners, and engage in a community dedicated to animal welfare. Key features include pet profile creation, social connections, play scheduling, and earning opportunities through pet-related activities. The platform also includes a unique 'Feed a Dog in Need' feature for non-pet owners to contribute to animal welfare. Built with modern web technologies, it offers seamless user experience with multiple registration options including email, phone, and social media integration.",
    imageId: "project-3",
    link: "https://www.dwiggydoo.com/",
    tags: ["Web Development", "Social Networking", "Mobile App Development"],
  },
  {
    id: "4",
    name: "GIEO GITA Spiritual Organization Website",
    description:
      "A comprehensive spiritual platform for GIEO GITA organization dedicated to spreading Bhagwad Gita knowledge worldwide. Currently in active development.",
    longDescription:
      "GIEO GITA is a spiritual organization founded by Swami Shri Gyananand Ji Maharaj to promote The Bhagwad Gita globally. The website serves as a digital platform showcasing the organization's mission, services, events, and spiritual teachings. It features information about Swami Ji's journey, the organization's milestones including International Gita Mahotsav celebrations, various social services like Gau Sewa, health initiatives, education programs, and nature conservation. The platform connects devotees worldwide and provides access to spiritual resources, virtual tours, and donation facilities.",
    imageId: "project-4",
    link: "https://gieogita.org/",
    tags: ["Web Development", "UI/UX Design", "Content Management"],
  },
  {
    id: "5",
    name: "Box Pro Fitness",
    description:
      "A dedicated boxing fitness app designed to help users start or continue their boxing fitness journey. Currently in active development.",
    longDescription:
      "Box Pro Fitness is a comprehensive fitness application created by boxing champions for everyday champions. The app empowers users to achieve their health and fitness goals through structured boxing workouts tailored for all fitness levels, including a 'couch2contender' program. Designed to unlock the inner champion in everyday people, Box Pro Fitness offers personalized training routines, progress tracking, and professional boxing techniques adapted for fitness enthusiasts. The app combines the discipline and intensity of boxing with accessible fitness programming, making it suitable for beginners and experienced fitness enthusiasts alike. Features include customizable workout plans, technique tutorials, progress monitoring, and motivational content designed to help users build strength, endurance, and confidence through boxing-inspired fitness training.",
    imageId: "project-5",
    link: "https://boxprotraining.co.uk",
    tags: ["Mobile App Development", "Health & Fitness", "UI/UX Design"],
    status: "in-development",
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
    publishedAt: '',
    readTime: undefined,
    excerpt: undefined
  },
  {
    id: '2',
    slug: 'mastering-microservices-architecture',
    title: 'Mastering Microservices: A Guide to Building Scalable Systems',
    content: 'Microservices architecture offers a powerful way to build large, complex applications that are easy to scale and maintain. However, it also introduces new challenges. This guide covers the fundamental principles of microservices, best practices for designing and implementing them, and common pitfalls to avoid. We share our experiences and lessons learned from building microservices-based systems for our clients...',
    date: '2024-04-22',
    author: 'John Smith',
    imageId: 'blog-post-2',
    publishedAt: '',
    readTime: undefined,
    excerpt: undefined
  },
  {
    id: '3',
    slug: 'design-thinking-for-developers',
    title: 'Why Every Developer Should Learn Design Thinking',
    content: 'Design thinking is a human-centered approach to problem-solving that can help you build better products. It\'s not just for designers. In this article, we explain the core concepts of design thinking and show how developers can apply them to their work. By empathizing with users and iterating on ideas, you can create software that people love to use...',
    date: '2024-03-10',
    author: 'Alex Ray',
    imageId: 'blog-post-3',
    publishedAt: '',
    readTime: undefined,
    excerpt: undefined
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
