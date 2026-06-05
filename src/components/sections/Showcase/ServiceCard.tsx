// src/components/sections/Showcase/ServiceCard.tsx
import ServiceLink from "./ServiceLink";

interface ServiceCardProps {
  title: string;
  links: string[];
}

export default function ServiceCard({ title, links }: ServiceCardProps) {
  return (
    <div className="min-w-[85vw] md:min-w-[25vw] border-1 border-white py-7 rounded-4xl px-9 flex flex-col gap-4 md:gap-4 h-full">
      <div className="overflow-hidden py-1">
        <h3 className="reveal-item font-parkinsans text-3xl md:text-3xl font-regular">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <ServiceLink key={link} text={link} />
        ))}
      </div>
    </div>
  );
}