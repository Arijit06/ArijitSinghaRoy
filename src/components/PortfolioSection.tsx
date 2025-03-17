
import { useState } from "react";
import { 
  LaptopCode, 
  Browsers, 
  Share2, 
  Smartphone, 
  Cog, 
  Trophy 
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Test Automation Framework Development",
    tools: "Selenium, Java, TestNG, Jenkins",
    icon: <LaptopCode className="h-10 w-10 text-blue-500" />,
    achievements: [
      "Developed and optimized test automation frameworks, achieving a 90% reduction in manual testing efforts.",
      "Automated over 80 test cases, ensuring robust test coverage."
    ]
  },
  {
    id: 2,
    title: "Cross-Browser Testing",
    tools: "Selenium Grid, Chrome, Edge",
    icon: <Browsers className="h-10 w-10 text-blue-500" />,
    achievements: [
      "Conducted cross-browser tests to ensure compatibility across Chrome and Edge.",
      "Utilized Selenium Grid for parallel execution, reducing overall test execution time."
    ]
  },
  {
    id: 3,
    title: "API Automation Testing",
    tools: "Rest Assured, Postman, Jenkins",
    icon: <Share2 className="h-10 w-10 text-blue-500" />,
    achievements: [
      "Implemented API automation testing frameworks, automating over 30 API test cases.",
      "Achieved a 70% reduction in testing time."
    ]
  },
  {
    id: 4,
    title: "Mobile Automation Testing",
    tools: "Appium, Android, iOS",
    icon: <Smartphone className="h-10 w-10 text-blue-500" />,
    achievements: [
      "Designed and executed mobile automation testing frameworks for Android and iOS platforms.",
      "Automated over 30 mobile test cases, achieving an 85% reduction in testing time."
    ]
  },
  {
    id: 5,
    title: "CI/CD Pipeline Automation",
    tools: "Jenkins, Docker",
    icon: <Cog className="h-10 w-10 text-blue-500" />,
    achievements: [
      "Configured and managed Jenkins pipelines to automate build and deployment processes.",
      "Containerized test automation scripts using Docker, improving deployment efficiency."
    ]
  },
  {
    id: 6,
    title: "Accomplishments",
    tools: "",
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
    achievements: [
      "Solved over 900+ problems on coding platforms like LeetCode, Codeforces, and Codechef.",
      "Received the Great Performer's Award at Voya India three times for contributions to automation."
    ]
  }
];

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="portfolio" className="py-20 px-4 bg-black/70">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`bg-white/10 p-6 rounded-lg transition-all duration-300 hover:shadow-xl ${
                hoveredProject === project.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              {project.tools && (
                <p className="text-white/80 mb-4">
                  <strong>Tools:</strong> {project.tools}
                </p>
              )}
              <ul className="list-disc pl-5 space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="text-white/90">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
