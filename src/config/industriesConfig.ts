// src/config/industriesConfig.ts
import { 
  Waves, Home, TreePine, Dumbbell, 
  PaintBucket, Droplets, Zap 
} from "lucide-react";

export const industriesData = [
  {
    id: "cleaning",
    name: "Cleaning Services",
    icon: Waves,
    descriptor: "Residential & Commercial",
    description: "Cleaning businesses face constant challenges attracting consistent, high-quality clients. Our website and SEO strategy positions your cleaning company as the premium local choice. We optimize your Google Business Profile, build a high-converting website showcasing your services, and implement WhatsApp integration for instant client inquiries. This drives qualified leads, reduces booking friction, and increases your closing rate.",
    subServices: ["Office Cleaning", "Residential Cleaning", "Post-Construction Cleanup", "Carpet & Upholstery"],
    highlights: ["High-Converting Website Design", "Local SEO Optimization", "WhatsApp Lead Integration"],
    stat: "Helped 20+ cleaning companies double their monthly inquiries.",
    images: ["/images/industries/cleaning-1.webp", "/images/industries/cleaning-2.webp"]
  },
  {
    id: "roofing",
    name: "Roofing",
    icon: Home,
    descriptor: "Service & Maintenance",
    description: "Roofing is a high-ticket, high-competition industry. We focus on building trust through social proof and technical authority. Our websites are designed to highlight your certifications, past projects, and emergency services. Combined with a localized SEO approach, we ensure that when a storm hits or a leak appears, your brand is the first one homeowners see and trust.",
    subServices: ["Residential Roofing", "Commercial Roofing", "Roof Repair", "Storm Damage Assessment"],
    highlights: ["Authority-Building Portfolios", "Local Maps Dominance", "Emergency Lead Capture"],
    stat: "40% average increase in storm-related lead volume for clients.",
    images: ["/images/industries/roofing-1.webp", "/images/industries/roofing-2.webp"]
  },
  // Add other 5 industries (Landscaping, Gym, Painting, Plumbing, HVAC) following this same pattern
];