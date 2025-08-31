
import { useState } from "react";
import { Linkedin, Mail, Code, Github } from "lucide-react";

const contactLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arijit-singha-roy-2a7b88a7",
    icon: <Linkedin className="mr-2 h-5 w-5" />,
    color: "bg-white text-black hover:bg-white/80",
  },
  {
    id: 2,
    name: "Email",
    url: "mailto:arijitsingharoy6@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Arijit,",
    icon: <Mail className="mr-2 h-5 w-5" />,
    color: "bg-gray-200 text-black hover:bg-gray-300",
  },
  {
    id: 3,
    name: "LeetCode",
    url: "https://leetcode.com/arijitsingharoy6/",
    icon: <Code className="mr-2 h-5 w-5" />,
    color: "bg-gray-300 text-black hover:bg-gray-400",
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/Arijit06",
    icon: <Github className="mr-2 h-5 w-5" />,
    color: "bg-yellow-400 text-black hover:bg-yellow-500",
  },
];

const ContactSection = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  
  return (
    <section id="contact" className="py-20 px-4 bg-black/70">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-xl text-center mb-10">
          Feel free to reach out to me via LinkedIn or email:
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} px-6 py-3 rounded-md flex items-center justify-center font-medium transition-all duration-300 ${
                hoveredLink === link.id ? "transform scale-110" : ""
              }`}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
