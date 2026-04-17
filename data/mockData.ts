export interface TechStack {
  id: string;
  name: string;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  techStack: string[];
  categories: string[];
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  businessImpact: string;
  externalLink?: string;
  status: "published" | "draft";
  createdAt: string;
}

export const techStacks: TechStack[] = [
  { id: "1", name: "React", icon: "⚛️" },
  { id: "2", name: "TypeScript", icon: "📘" },
  { id: "3", name: "Node.js", icon: "🟢" },
  { id: "4", name: "Next.js", icon: "▲" },
  { id: "5", name: "Tailwind CSS", icon: "🎨" },
  { id: "6", name: "MongoDB", icon: "🍃" },
  { id: "7", name: "PostgreSQL", icon: "🐘" },
  { id: "8", name: "Firebase", icon: "🔥" },
  { id: "9", name: "Docker", icon: "🐳" },
  { id: "10", name: "AWS", icon: "☁️" },
];

export const categories: Category[] = [
  { id: "1", name: "Web Development", slug: "web-development" },
  { id: "2", name: "Mobile App", slug: "mobile-app" },
  { id: "3", name: "E-Commerce", slug: "e-commerce" },
  { id: "4", name: "Dashboard", slug: "dashboard" },
  { id: "5", name: "Landing Page", slug: "landing-page" },
  { id: "6", name: "System Integration", slug: "system-integration" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform for Fashion Brand",
    slug: "ecommerce-fashion-platform",
    description: "A modern, high-performance e-commerce platform built for a premium fashion brand with advanced features including real-time inventory management, personalized recommendations, and seamless payment integration.",
    shortDescription: "Premium fashion e-commerce with AI recommendations",
    images: [],
    techStack: ["1", "2", "4", "5", "7", "8"],
    categories: ["1", "3"],
    problemStatement: "The client needed a scalable e-commerce solution that could handle high traffic during flash sales while providing a premium shopping experience with personalized product recommendations.",
    solution: "We developed a modern e-commerce platform using Next.js for optimal performance, integrated with a headless CMS for easy content management, and implemented AI-powered product recommendations.",
    keyFeatures: [
      "Real-time inventory synchronization",
      "AI-powered product recommendations",
      "Multi-currency and multi-language support",
      "Advanced search with filters",
      "Secure payment gateway integration",
      "Admin dashboard for analytics",
    ],
    businessImpact: "Increased conversion rate by 45% and reduced cart abandonment by 30%. Platform successfully handled 10,000+ concurrent users during launch campaign.",
    externalLink: "https://example.com",
    status: "published",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Healthcare Management System",
    slug: "healthcare-management-system",
    description: "Comprehensive healthcare management system for hospitals and clinics, featuring patient records management, appointment scheduling, and telemedicine capabilities.",
    shortDescription: "Digital transformation for healthcare providers",
    images: [],
    techStack: ["1", "2", "3", "5", "7", "9"],
    categories: ["1", "4", "6"],
    problemStatement: "Healthcare providers needed a unified system to manage patient records, appointments, and enable remote consultations while ensuring HIPAA compliance.",
    solution: "Built a secure, HIPAA-compliant healthcare management platform with role-based access control, encrypted patient data, and integrated video consultation features.",
    keyFeatures: ["Electronic Health Records (EHR)", "Appointment scheduling system", "Telemedicine integration", "Prescription management", "Patient portal", "Analytics and reporting dashboard"],
    businessImpact: "Reduced administrative workload by 60%, improved patient satisfaction scores by 40%, and enabled 2,000+ remote consultations per month.",
    externalLink: "https://example.com",
    status: "published",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "Real Estate Listing Platform",
    slug: "real-estate-platform",
    description: "Modern real estate platform with advanced property search, virtual tours, and CRM integration for agents and property developers.",
    shortDescription: "Smart property discovery platform",
    images: [],
    techStack: ["1", "2", "4", "5", "6", "8"],
    categories: ["1", "5"],
    problemStatement: "Real estate agencies struggled with fragmented systems for property listings, client management, and virtual property tours.",
    solution: "Developed an all-in-one platform with interactive maps, 360° virtual tours, advanced search filters, and integrated CRM for lead management.",
    keyFeatures: ["Interactive property maps", "360° virtual tours", "Advanced search and filters", "CRM integration", "Lead management system", "Mobile-responsive design"],
    businessImpact: "Increased property inquiries by 70%, reduced time-to-close by 25%, and improved agent productivity by 50%.",
    externalLink: "https://example.com",
    status: "published",
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    title: "Financial Analytics Dashboard",
    slug: "financial-analytics-dashboard",
    description: "Enterprise-grade financial analytics dashboard with real-time data visualization, predictive analytics, and comprehensive reporting.",
    shortDescription: "Real-time financial insights platform",
    images: [],
    techStack: ["1", "2", "3", "5", "7", "10"],
    categories: ["1", "4"],
    problemStatement: "Financial teams lacked a centralized platform for real-time financial analysis and reporting across multiple business units.",
    solution: "Created a comprehensive analytics dashboard with real-time data processing, customizable reports, and predictive analytics using machine learning.",
    keyFeatures: ["Real-time data visualization", "Customizable dashboards", "Predictive analytics", "Automated reporting", "Multi-source data integration", "Export to multiple formats"],
    businessImpact: "Reduced reporting time by 80%, improved forecasting accuracy by 35%, and enabled data-driven decision making across the organization.",
    externalLink: "https://example.com",
    status: "published",
    createdAt: "2024-03-25",
  },
  {
    id: "5",
    title: "Educational Learning Platform",
    slug: "educational-learning-platform",
    description: "Interactive online learning platform with video courses, quizzes, progress tracking, and certification management.",
    shortDescription: "Scalable e-learning solution",
    images: [],
    techStack: ["1", "2", "4", "5", "6", "8"],
    categories: ["1"],
    problemStatement: "Educational institutions needed a scalable platform to deliver online courses with interactive content and track student progress.",
    solution: "Built a comprehensive LMS with video streaming, interactive quizzes, progress tracking, and automated certification upon course completion.",
    keyFeatures: ["Video course delivery", "Interactive quizzes and assessments", "Progress tracking", "Certification management", "Discussion forums", "Mobile app support"],
    businessImpact: "Enabled 50,000+ students to access courses remotely, achieved 90% course completion rate, and reduced operational costs by 40%.",
    externalLink: "https://example.com",
    status: "draft",
    createdAt: "2024-04-05",
  },
  {
    id: "6",
    title: "Restaurant Management System",
    slug: "restaurant-management-system",
    description: "Complete restaurant management solution with POS, inventory management, online ordering, and kitchen display system.",
    shortDescription: "All-in-one restaurant operations platform",
    images: [],
    techStack: ["1", "2", "3", "5", "6", "9"],
    categories: ["1", "4", "6"],
    problemStatement: "Restaurant chains needed a unified system to manage multiple locations, streamline operations, and offer online ordering.",
    solution: "Developed an integrated restaurant management system with POS, inventory tracking, online ordering, and real-time kitchen display.",
    keyFeatures: ["Point of Sale (POS) system", "Inventory management", "Online ordering integration", "Kitchen Display System (KDS)", "Multi-location support", "Analytics and reporting"],
    businessImpact: "Reduced order errors by 90%, increased online orders by 150%, and improved inventory accuracy to 98%.",
    externalLink: "https://example.com",
    status: "published",
    createdAt: "2024-04-12",
  },
];
