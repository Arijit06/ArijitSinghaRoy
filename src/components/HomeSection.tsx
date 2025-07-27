
import { useEffect, useRef } from "react";

const HomeSection = () => {
  const nameRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const nameElement = nameRef.current;
    
    if (!nameElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = nameElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;
      
      nameElement.style.textShadow = `
        ${offsetX * 10}px ${offsetY * 10}px 15px rgba(255, 69, 0, 0.7)
      `;
      
      nameElement.style.transform = `
        perspective(500px)
        rotateY(${offsetX * 5}deg)
        rotateX(${-offsetY * 5}deg)
        scale(1.05)
      `;
    };
    
    const handleMouseLeave = () => {
      nameElement.style.textShadow = "none";
      nameElement.style.transform = "none";
    };
    
    nameElement.addEventListener("mousemove", handleMouseMove);
    nameElement.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      nameElement.removeEventListener("mousemove", handleMouseMove);
      nameElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  return (
    <section id="home" className="flex flex-col justify-center items-center min-h-screen pt-16 pb-20 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
        Hi, I'm <a 
          href="https://www.linkedin.com/in/arijit-singha-roy-2a7b88a7/" 
          target="_blank" 
          rel="noopener noreferrer"
          ref={nameRef} 
          className="text-white hover:text-orange-300 transition-all duration-300 inline-block cursor-pointer px-2 underline decoration-orange-400 hover:decoration-orange-300"
        >
          Arijit Singha Roy
        </a>,
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="animate-text-slide inline-block">a Software Engineer</span>
      </h2>
      <p className="text-xl md:text-2xl text-white/80 max-w-2xl text-center animate-fade-in">
        Ensuring software quality through rigorous testing and automation.
      </p>
    </section>
  );
};

export default HomeSection;
