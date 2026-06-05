export const siteConfig = {
  logo: "Weblinx Media",
  logoUrl: "/images/logo2.png",
  phone: "+1 (123) 456-7890",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
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