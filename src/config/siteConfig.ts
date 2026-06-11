export const siteConfig = {
  logo: "Weblinx Media",
  logoUrl: "/images/logo2.png",
  phone: "+1 (123) 456-7890",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Website Development", href: "/services/web-development" },
    { name: "Social Media Design", href: "/services/social-media-design" },
  ],
  hero: {
    heading: "Leading Full Service",
    ticker: [
      "Web Design Agency",
      "Social Media Agency",
      "Tech Agency",
      "Digital Agency",
    ],
    paragraph:
      "We are a results-driven marketing and development agency, committed to helping brands grow through website development, website designing, and SEO. Our expert team crafts tailored strategies that maximize engagement, boost conversions, and elevate your online presence.",
    cta: {
      label: "Start a Project",
      href: "/contact",
    },
    accent: {
      label: "Let's Grow Together",
      heading: "Grow Our Business",
      logos: [
        { src: "/images/partner1.png", alt: "Partner 1" },
        { src: "/images/partner2.png", alt: "Partner 2" },
      ],
    },
  },
};
// src/config/siteConfig.ts (Add this to your existing config)
// src/config/siteConfig.ts
export const showcaseData = {
  mainHeading: "We are a digital and tech agency making brands people remember.",
  subHeading: "Big ideas, loud design, real results. You bring the vision, we will wire it into reality.",
  services: [
    {
      title: "Designing",
      links: ["Branding", "UI/UX", "Social Media Post", "Graphic Design", "Brand Identity"],
    },
    {
      title: "Product Development",
      links: ["Web Apps", "Next.js Development", "MERN Stack", "QA Solutions"],
    },
   
    {
      title: "Websites",
      links: ["CMS Websites", "E-commerce Solutions", "Framer", "Landing Pages", "Portfolios"],
    }, {
      title: "Marketing",
      links: ["SEO", "Social Media Marketing"],
    },
  ],
};
// src/config/siteConfig.ts
export const clientData = {
  heading: "Chosen by clients who expect more",
  subtext: "We partner with visionary companies to build high-performance digital products that set new standards in the US market and beyond.",
  logos: [
    { src: "/images/clients/logo1.svg", alt: "Client 1" },
    { src: "/images/clients/logo2.svg", alt: "Client 2" },
    { src: "/images/clients/logo3.svg", alt: "Client 3" },
    { src: "/images/clients/logo4.svg", alt: "Client 4" },
  ]
};
// src/config/siteConfig.ts
export const brandsData = {
  heading: "Brands We Have Helped Grow",
  subheading: "Trusted by industry leaders worldwide",
  logos: [
    { src: "/images/logo1.webp", alt: "Client 1" },
    { src: "/images/logo2.webp", alt: "Client 2" },
    { src: "/images/logo3.webp", alt: "Client 3" },
    { src: "/images/logo4.webp", alt: "Client 4" },
    { src: "/images/logo5.webp", alt: "Client 5" },
    { src: "/images/logo6.webp", alt: "Client 6" },
  ],
  portfolio: [
    { src: "/images/1.webp", alt: "Project 1" },
    { src: "/images/2.webp", alt: "Project 2" },
    { src: "/images/3.webp", alt: "Project 3" },
    { src: "/images/4.webp", alt: "Project 4" },
    { src: "/images/5.webp", alt: "Project 5" },
    { src: "/images/6.webp", alt: "Project 6" },
    { src: "/images/7.webp", alt: "Project 7" },
  ]
};
// src/config/siteConfig.ts
export const whyChooseUsData = {
  heading: "Why Choose Us as Your Website Partner?",
  subheading: "Your Brand Identity at the Core of My Approach.",
  description: "At Weblinx Media, we don't just offer marketing services; we craft custom strategies that help businesses thrive in the digital world. Whether it's website design, development, SEO, or content marketing, we ensure your brand stands out.",
  description2: "Don't just hire any agency—partner with a team that truly understands your goals and delivers real results.",
  cards: [
    {
      title: "Proven Results that Drive Growth",
      text: "We don't believe in guesswork. Our data-driven digital marketing strategies are designed to increase traffic, boost conversions, and maximize ROI.",
      color: "#108499" // User requested specific blue/teal
    },
    {
      title: "Honest and Transparent Approach",
      text: "No fluff, no false promises. We provide clear reporting and honest communication so you always know how your brand is performing.",
      color: "#FFAD14" // Brand Primary
    },
    {
      title: "Expert in Website Development & SEO",
      text: "From SEO to custom development, our team stays ahead of digital trends to deliver high-performance solutions that rank and convert.",
      color: "#108499"
    },
    {
      title: "Customer-Centric Marketing Solutions",
      text: "We tailor every campaign to your brand's unique needs. No cookie-cutter strategies here. Your success is our absolute priority.",
      color: "#FFAD14"
    }
  ]
};
// src/config/siteConfig.ts
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { title } from 'process';

export const processData = {
  heading: "Our Process",
  stages: [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      text: "We start by understanding your business, target audience, and goals. Through research and strategy sessions, we identify opportunities and craft a roadmap for your digital success."
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      text: "Our design team creates stunning, user-centric interfaces that reflect your brand identity. We focus on aesthetics, usability, and conversion optimization to ensure your website stands out."
    },
    {
      number: "03",
      icon: Code,
      title: "Develop",
      text: "Our developers build fast, scalable, and SEO-friendly websites using modern tech stacks like Next.js, React, and TypeScript. We prioritize clean code and performance at every step."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      text: "We deploy your website, run final quality checks, and provide ongoing support and analytics tracking. Your success doesn't end at launch — we're here to help you grow."
    }
  ]
};
// src/config/siteConfig.ts
export const aiSeoReimaginedData = {
  heading: "AI-First SEO for Next-Gen Growth",
  subheading: "We don't just optimize for search engines. We optimize for the AI that powers them.",
  
  // Left Column: The Strategy Hub
  strategyPoints: [
    {
      id: "gemini",
      title: "Generative Engine Optimization",
      text: "Securing top-rank visibility within AI-powered answer engines."
    },
    {
      id: "sge",
      title: "E-E-A-T Signal Amplification",
      text: "Building undeniable authority that both users and algorithms trust."
    },
    {
      id: "chatgpt",
      title: "LLM Citation & Sourcing",
      text: "Positioning your brand as the primary, citable source for AI models."
    },
    {
      id: "perplexity",
      title: "Predictive Content Architecture",
      text: "Developing content frameworks that anticipate and answer future user queries."
    }
  ],

  // Right Column: The Service Cards
  optimizationCards: [
    {
      id: "gemini",
      title: "Gemini AI Optimization",
      text: "We optimize your content to appear in Google's AI Overviews, targeting conversational queries and ensuring your brand is the primary source."
    },
    {
      id: "sge",
      title: "Google SGE Optimization",
      text: "Our strategies prepare your site for the Search Generative Experience, focusing on structured data and semantic relevance to dominate SGE snapshots."
    },
    {
      id: "chatgpt",
      title: "ChatGPT Search Optimization",
      text: "We position your brand as a citable authority, ensuring that when users ask ChatGPT questions, your business is the one providing the answers."
    },
    {
      id: "perplexity",
      title: "Perplexity AI Integration",
      text: "We adapt your content to be easily parsed and recommended by answer engines like Perplexity, capturing users at the highest point of intent."
    }
  ]
};
// src/config/siteConfig.ts
export const luxuryTestimonialData = {
  heading: "What People Say About Us",
  staticParagraph: "Your satisfaction comes first. A healthy customer relationship is vital. You can count on us to solve your problems and help your company grow in a respectful and cheerful way.",
  cta: "Drop a Review",
  testimonials: [
    {
      id: 1,
      name: "Yann Chatellier",
      company: "Fondateur d'Opsis TV",
      image: "/images/Client1.jpg", // Replace with your image
      rating: 5,
      title : "They're always looking for new strategies.",
      quote: "Bazil a su nous accompagner dans la réflexion et l'idéation en amont et ces propositions/réalisations sont toujours pertinentes et argumentées. C'est un plaisir de travailler et d'échanger avec lui."
    },
    {
      id: 2,
      name: "John Smith",
      company: "Innovate Inc.",
      image: "/images/Client2.jpg", // Replace with your image
      rating: 5,
      title : "They audit my website and took it to next level.",
      quote: "The strategic insights and flawless execution from Weblinx Media completely redefined our digital footprint. An essential partner for growth."
    },
    {
      id: 3,
      name: "Maria Garcia",
      company: "Creative Solutions",
      image: "/images/Client3.jpg", // Replace with your image
      rating: 5,
      title : "They truly delivered results that impressed me.",
      quote: "Their team transformed our vision into a stunning, high-performance website that our users love. The process was seamless and professional."
    }
  ]
};

// src/config/siteConfig.ts
export const projectData = {
  heading: "View Case Studies",
  projects: [
    {
      id: "01",
      title: "Vanguard E-commerce",
      slug: "vanguard",
      category: "Development",
      image: "/images/img1.webp",
      description: "A high-performance luxury storefront built with Next.js 14, focused on ultra-fast load times and seamless transitions."
    },
    {
      id: "02",
      title: "Nova AI Platform",
      slug: "nova-ai",
      category: "SaaS Design",
      image: "/images/img2.webp",
      description: "Redefining AI interaction with a sleek, minimal interface designed for the next generation of data scientists."
    },
    {
      id: "03",
      title: "Eclipse Brand Identity",
      slug: "eclipse",
      category: "Branding",
      image: "/images/img3.webp",
      description: "Crafting a visual language for a sustainable energy firm that bridges the gap between tech and nature."
    },
  
  ]
};
// src/config/siteConfig.ts
export const contactData = {
  heading: "Get in Touch",
  description: "Every vision needs an architect. Let's discuss how we can scale your brand.",
  logoText: "Weblinx Media",
  logoTagline: "Engineered for the next generation of digital growth.",
  info: {
    title: "Let's connect directly",
    phone: "+1 (123) 456-7890",
    email: "hello@weblinx.media",
    timing: "Mon - Fri: 9am - 6pm EST"
  },
  socials: [
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Dribbble", url: "#" }
  ],
  form: {
    title: "Be a part of our team",
    privacyText: "By checking this box, I agree to be contacted by Weblinx Media via phone, text, and email regarding my inquiry. I understand that this consent is not a condition of purchase."
  }
};
// src/config/siteConfig.ts
export const faqData = {
  smallTitle: "FAQ",
  hiringHeading: "Why hire a professional agency for your digital growth?",
  hiringAnswer: "While DIY tools exist, an agency brings a multi-disciplinary team of experts in design, engineering, and data. We don't just build pages; we architect conversion engines that outpace your competition and secure your brand's future in an AI-driven market.",
  questions: [
    {
      id: 1,
      question: "How long does a typical website project take?",
      answer: "A standard high-end project typically spans 4 to 8 weeks. This includes deep-dive research, wireframing, custom design, high-performance development, and rigorous QA testing."
    },
    {
      id: 2,
      question: "Do you offer SEO services after the site is launched?",
      answer: "Absolutely. We specialize in AI-First SEO and GEO (Generative Engine Optimization). We ensure your brand remains visible not just on Google, but within LLMs like ChatGPT and Gemini."
    },
    {
      id: 3,
      question: "Who owns the website and the code once it's finished?",
      answer: "You do. 100%. Unlike many agencies, we don't hold your assets hostage. You get full ownership of the source code, design files, and domain assets upon final payment."
    },
    {
      id: 4,
      question: "What technology stack do you use for development?",
      answer: "We primarily build on the Next.js 14 App Router, utilizing Tailwind CSS for styling and GSAP for high-end animations. This ensures your site is blazingly fast and highly scalable."
    }
  ]
};