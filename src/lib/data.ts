import type { Service, Project, BlogPost, TeamMember, JobPosting, CompanyBenefit, CompanyValue } from './types';

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

export const jobPostings: JobPosting[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco, CA',
    type: 'full-time',
    experience: '5+ years',
    description: 'Are you passionate about building exceptional digital experiences that impact millions of users? Join our world-class engineering team as a Senior Full Stack Developer and help shape the future of technology. You\'ll work on cutting-edge projects using the latest technologies, collaborate with brilliant minds, and have the autonomy to make technical decisions that drive our products forward. This role offers unlimited growth potential, challenging problems to solve, and the opportunity to mentor the next generation of developers. We\'re looking for someone who thrives in a fast-paced environment, loves clean code, and is excited about building scalable solutions that make a real difference.',
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent practical experience',
      '5+ years of hands-on experience in full-stack development with proven track record',
      'Expert-level proficiency in React, Node.js, TypeScript, and modern JavaScript frameworks',
      'Extensive experience with cloud platforms (AWS, GCP, or Azure) and microservices architecture',
      'Deep understanding of database design, optimization, and both SQL and NoSQL systems',
      'Proven experience with CI/CD pipelines, Docker, Kubernetes, and DevOps best practices',
      'Strong system design skills and ability to architect scalable solutions',
      'Excellent problem-solving abilities and passion for writing clean, maintainable code',
      'Outstanding communication skills and experience mentoring junior developers'
    ],
    responsibilities: [
      'Architect and develop highly scalable, secure web applications serving millions of users',
      'Lead technical decision-making and drive best practices across the engineering team',
      'Collaborate closely with product, design, and data teams to deliver exceptional user experiences',
      'Write clean, well-tested, and thoroughly documented code following industry standards',
      'Mentor junior developers, conduct code reviews, and contribute to team knowledge sharing',
      'Stay at the forefront of technology trends and continuously improve our tech stack',
      'Participate in on-call rotations and ensure high availability of production systems',
      'Drive technical initiatives that improve developer productivity and system performance'
    ],
    postedDate: '2024-10-20',
    applicationDeadline: '2024-11-30',
    featured: true
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / New York, NY',
    type: 'full-time',
    experience: '3+ years',
    description: 'Transform ideas into beautiful, intuitive experiences that users love! As a UI/UX Designer at Softaro Labs, you\'ll be at the heart of product innovation, crafting digital experiences that seamlessly blend aesthetics with functionality. You\'ll work alongside passionate product managers, engineers, and fellow designers to solve complex user problems through thoughtful design. This role offers the perfect opportunity to shape user journeys, create design systems that scale, and see your work impact thousands of users daily. We\'re seeking a creative problem-solver who understands that great design is not just about how it looks, but how it works. Join us in building products that users don\'t just use, but truly enjoy.',
    requirements: [
      'Bachelor\'s degree in Design, Human-Computer Interaction, or equivalent experience',
      '3+ years of proven UI/UX design experience with a strong portfolio of digital products',
      'Expert proficiency in Figma, Sketch, Adobe Creative Suite, and modern design tools',
      'Exceptional portfolio demonstrating user-centered design thinking and problem-solving',
      'Experience building and maintaining comprehensive design systems and component libraries',
      'Deep understanding of responsive design, accessibility standards (WCAG), and usability principles',
      'Knowledge of HTML/CSS and ability to collaborate effectively with developers',
      'Experience with user research methodologies, usability testing, and data-driven design decisions',
      'Strong presentation skills and ability to articulate design decisions to stakeholders'
    ],
    responsibilities: [
      'Lead end-to-end design process from user research to final implementation',
      'Create wireframes, interactive prototypes, and pixel-perfect high-fidelity designs',
      'Conduct user research, interviews, and usability testing to validate design decisions',
      'Build and evolve our design system to ensure consistency across all products',
      'Collaborate closely with engineering teams to ensure accurate design implementation',
      'Present design concepts and rationale to stakeholders and executive leadership',
      'Analyze user behavior data and feedback to continuously improve user experiences',
      'Stay current with design trends, tools, and best practices in the industry',
      'Mentor junior designers and contribute to the growth of our design culture'
    ],
    postedDate: '2024-10-18',
    featured: true
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote / Austin, TX',
    type: 'full-time',
    experience: '4+ years',
    description: 'Build the backbone of innovation! As a DevOps Engineer at Softaro Labs, you\'ll be the architect of our infrastructure, ensuring our applications run flawlessly at scale. You\'ll work with cutting-edge cloud technologies, automate everything that can be automated, and create the reliable foundation that enables our development teams to ship features faster and more confidently. This role is perfect for someone who loves solving complex infrastructure challenges, optimizing system performance, and implementing security best practices. You\'ll have the opportunity to work with the latest tools in the DevOps ecosystem, contribute to our platform\'s evolution, and play a crucial role in our company\'s technical success. Join us in building infrastructure that scales with our ambitions.',
    requirements: [
      'Bachelor\'s degree in Computer Science, Engineering, or equivalent hands-on experience',
      '4+ years of DevOps, Site Reliability Engineering, or Infrastructure experience',
      'Deep expertise with AWS, Docker, Kubernetes, and container orchestration platforms',
      'Proficiency in Infrastructure as Code using Terraform, CloudFormation, or similar tools',
      'Extensive experience with CI/CD pipelines using Jenkins, GitLab CI, GitHub Actions, or similar',
      'Strong knowledge of monitoring, logging, and alerting tools (Prometheus, Grafana, ELK stack)',
      'Advanced scripting skills in Python, Bash, Go, or similar programming languages',
      'Experience with security best practices, compliance standards, and disaster recovery',
      'Excellent troubleshooting skills and experience with high-availability systems'
    ],
    responsibilities: [
      'Design, implement, and maintain robust CI/CD pipelines for fast, reliable deployments',
      'Manage and optimize cloud infrastructure across multiple environments and regions',
      'Implement comprehensive monitoring, alerting, and logging systems for proactive issue detection',
      'Ensure security compliance, implement best practices, and maintain disaster recovery procedures',
      'Troubleshoot complex production issues and optimize system performance and cost',
      'Collaborate with development teams to improve deployment processes and system reliability',
      'Automate repetitive tasks and implement self-healing infrastructure solutions',
      'Lead infrastructure migrations, capacity planning, and technology evaluations',
      'Participate in on-call rotations and incident response procedures'
    ],
    postedDate: '2024-10-15'
  },
  {
    id: '4',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Seattle, WA',
    type: 'full-time',
    experience: '5+ years',
    description: 'Shape the future of our products and drive innovation that matters! As a Product Manager at Softaro Labs, you\'ll be the strategic leader who transforms market insights into breakthrough products. You\'ll work at the intersection of business, technology, and user experience, making critical decisions that impact our product roadmap and company direction. This role offers the opportunity to lead cross-functional teams, analyze market trends, and build products that solve real-world problems for our users. You\'ll collaborate with engineering, design, marketing, and executive teams to bring your product vision to life. We\'re looking for a strategic thinker who can balance user needs with business objectives, communicate effectively across all levels of the organization, and thrive in a fast-paced, data-driven environment.',
    requirements: [
      'Bachelor\'s degree in Business, Engineering, Computer Science, or related field with MBA preferred',
      '5+ years of product management experience with successful product launches and growth metrics',
      'Proven experience with Agile/Scrum methodologies and working closely with engineering teams',
      'Strong analytical skills with experience using data to drive product decisions and measure success',
      'Exceptional communication, presentation, and stakeholder management skills',
      'Experience with product analytics tools (Mixpanel, Amplitude, Google Analytics) and A/B testing',
      'Technical background or demonstrated ability to work effectively with engineering teams',
      'Experience with user research, customer interviews, and translating insights into product requirements',
      'Track record of managing complex product roadmaps and competing priorities'
    ],
    responsibilities: [
      'Define and execute product vision, strategy, and roadmap aligned with business objectives',
      'Conduct market research, competitive analysis, and user research to identify opportunities',
      'Collaborate with engineering teams to translate product requirements into technical specifications',
      'Manage product backlog, prioritization, and sprint planning with development teams',
      'Analyze product metrics, user feedback, and market data to optimize product performance',
      'Coordinate product launches, go-to-market strategies, and cross-functional initiatives',
      'Present product updates, roadmaps, and strategic recommendations to executive leadership',
      'Work closely with design teams to ensure exceptional user experience and product usability',
      'Monitor competitive landscape and industry trends to maintain product competitiveness'
    ],
    postedDate: '2024-10-10'
  },
  {
    id: '5',
    title: 'Frontend Developer (Internship)',
    department: 'Engineering',
    location: 'Remote / On-site',
    type: 'internship',
    experience: 'Entry level',
    description: 'Launch your tech career with hands-on experience at a cutting-edge company! Our Frontend Developer Internship program is designed to accelerate your growth and provide real-world experience building modern web applications. You\'ll work alongside senior developers, contribute to actual projects that impact our users, and learn industry best practices from day one. This internship offers mentorship, learning opportunities, and the chance to work with the latest technologies in a supportive, collaborative environment. You\'ll gain experience with React, TypeScript, modern development tools, and agile methodologies while building a portfolio of work that showcases your skills. We\'re looking for passionate, curious individuals who are eager to learn, contribute meaningfully to our team, and potentially transition to a full-time role upon graduation.',
    requirements: [
      'Currently pursuing or recently completed Bachelor\'s degree in Computer Science, Web Development, or related field',
      'Solid foundation in HTML5, CSS3, JavaScript (ES6+), and responsive web design principles',
      'Familiarity with React, Vue.js, Angular, or similar modern frontend frameworks',
      'Basic understanding of Git version control, command line tools, and development workflows',
      'Strong problem-solving skills, attention to detail, and passion for creating great user experiences',
      'Excellent communication skills and ability to work collaboratively in a team environment',
      'Eagerness to learn new technologies, accept feedback, and continuously improve skills',
      'Portfolio or GitHub projects demonstrating frontend development capabilities',
      'Available for minimum 3-month internship commitment with potential for extension'
    ],
    responsibilities: [
      'Develop responsive user interface components using React, TypeScript, and modern CSS frameworks',
      'Participate in daily standups, sprint planning, and code reviews with the development team',
      'Learn and apply modern frontend development practices, testing methodologies, and performance optimization',
      'Contribute to documentation, user guides, and technical specifications for developed features',
      'Work on real client projects under mentorship, gaining exposure to production-level development',
      'Attend technical workshops, training sessions, and lunch-and-learn presentations',
      'Collaborate with design and backend teams to implement pixel-perfect, functional user interfaces',
      'Participate in usability testing sessions and implement feedback to improve user experience',
      'Present completed projects and learning outcomes to the team and stakeholders'
    ],
    postedDate: '2024-10-25',
    applicationDeadline: '2024-12-15'
  }
];

export const companyBenefits: CompanyBenefit[] = [
  {
    id: '1',
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and mental health support',
    icon: 'Heart',
    category: 'health'
  },
  {
    id: '2',
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and work-life balance',
    icon: 'Clock',
    category: 'lifestyle'
  },
  {
    id: '3',
    title: 'Professional Growth',
    description: 'Learning stipend, conference attendance, and career development programs',
    icon: 'TrendingUp',
    category: 'professional'
  },
  {
    id: '4',
    title: 'Competitive Salary',
    description: 'Market-competitive salaries with equity participation',
    icon: 'DollarSign',
    category: 'financial'
  },
  {
    id: '5',
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge and spend with family',
    icon: 'Calendar',
    category: 'time-off'
  },
  {
    id: '6',
    title: 'Tech Stipend',
    description: 'Annual budget for latest equipment and development tools',
    icon: 'Laptop',
    category: 'professional'
  },
  {
    id: '7',
    title: 'Team Events',
    description: 'Regular team building activities, retreats, and social events',
    icon: 'Users',
    category: 'lifestyle'
  },
  {
    id: '8',
    title: 'Retirement Planning',
    description: '401(k) matching and financial planning resources',
    icon: 'PiggyBank',
    category: 'financial'
  }
];

export const companyValues: CompanyValue[] = [
  {
    id: '1',
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems',
    icon: 'Lightbulb'
  },
  {
    id: '2',
    title: 'Quality Craftsmanship',
    description: 'Every line of code, every design element is crafted with attention to detail',
    icon: 'Award'
  },
  {
    id: '3',
    title: 'Collaborative Spirit',
    description: 'We believe the best solutions come from diverse perspectives working together',
    icon: 'Users'
  },
  {
    id: '4',
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth and encourage exploration of new technologies',
    icon: 'BookOpen'
  },
  {
    id: '5',
    title: 'Customer Impact',
    description: 'Everything we do is focused on creating value and positive impact for our clients',
    icon: 'Target'
  },
  {
    id: '6',
    title: 'Work-Life Balance',
    description: 'We support our team\'s well-being and encourage a healthy work-life integration',
    icon: 'Heart'
  }
];
