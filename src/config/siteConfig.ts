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