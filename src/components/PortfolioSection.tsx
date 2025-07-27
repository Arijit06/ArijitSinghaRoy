import { useState, useEffect, useRef } from "react";
import { 
  Laptop, 
  Globe, 
  Share2, 
  Smartphone, 
  Cog, 
  Trophy 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const projects = [
  {
    id: 1,
    title: "Test Automation Framework Development",
    tools: "Selenium, Java, TestNG, Jenkins",
    icon: <Laptop className="h-10 w-10 text-blue-500" />,
    achievements: [
      "Developed and optimized test automation frameworks, achieving a 90% reduction in manual testing efforts.",
      "Automated over 80 test cases, ensuring robust test coverage."
    ]
  },
  {
    id: 2,
    title: "Cross-Browser Testing",
    tools: "Selenium Grid, Chrome, Edge",
    icon: <Globe className="h-10 w-10 text-blue-500" />,
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
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState("Initializing QA Environment...");
  const [showContent, setShowContent] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState<number[]>([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Detect when user scrolls to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrolled) {
          setHasScrolled(true);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasScrolled]);
  
  // Start loading animation only after scrolling
  useEffect(() => {
    if (!hasScrolled) return;
    
    const loadingStages = [
      "Initializing QA Environment...",
      "Loading Test Frameworks...",
      "Configuring Test Data...",
      "Setting Up Automation Tools...",
      "Running Preliminary Checks...",
      "Verifying Test Cases...",
      "Starting Test Execution...",
      "Compiling Test Results...",
      "QA Engineer Ready!"
    ];
    
    let currentStage = 0;
    const totalDuration = 1900; // 1.9 seconds total animation time
    const stageInterval = totalDuration / loadingStages.length;
    
    const interval = setInterval(() => {
      const newProgress = Math.min(100, (currentStage + 1) * (100 / loadingStages.length));
      setProgress(newProgress);
      setLoadingStage(loadingStages[currentStage]);
      
      currentStage++;
      if (currentStage >= loadingStages.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setShowContent(true);
        }, 200); // Reduced to 200ms for faster transition
      }
    }, stageInterval);
    
    return () => clearInterval(interval);
  }, [hasScrolled]);
  
  // Load projects with a faster effect
  useEffect(() => {
    if (!loading && showContent) {
      const loadProjectsSequentially = () => {
        projects.forEach((project, index) => {
          setTimeout(() => {
            setLoadedProjects(prev => [...prev, project.id]);
          }, index * 100); // Reduced to 100ms for faster project loading
        });
      };
      
      loadProjectsSequentially();
    }
  }, [loading, showContent]);
  
  const getProjectAnimationClass = (projectId: number) => {
    if (!loadedProjects.includes(projectId)) return "opacity-0 translate-y-8"; // Reduced to 8 for faster animation
    return "opacity-100 translate-y-0";
  };
  
  return (
    <section id="portfolio" ref={sectionRef} className="py-20 px-4 bg-black/70">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">portfolio</h2>
        
        {!hasScrolled ? (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl mb-2 h-8">Scroll to activate...</h3>
              <div className="h-2 w-full bg-white/10 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 p-6 rounded-lg">
                  <div className="h-10 w-10 rounded-full mb-4 bg-white/10"></div>
                  <div className="h-6 w-3/4 mb-2 bg-white/10"></div>
                  <div className="h-4 w-1/2 mb-4 bg-white/10"></div>
                  <div className="h-3 w-full mb-2 bg-white/10"></div>
                  <div className="h-3 w-5/6 bg-white/10"></div>
                </div>
              ))}
            </div>
          </div>
        ) : loading ? (
          <div className="max-w-md mx-auto space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-xl mb-2 h-8">{loadingStage}</h3>
              <Progress value={progress} className="h-2 w-full">
                <div 
                  className="absolute h-full bg-gradient-to-r from-gray-700 via-gray-500 to-white animate-[pulse_2s_ease-in-out_infinite]"
                  style={{ width: `${progress}%` }}
                />
              </Progress>
              <p className="mt-2 text-sm text-white/70 flex items-center justify-center">
                <span className="mr-2">{Math.round(progress)}% Complete</span>
                {progress < 100 && (
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-[pulse_2s_ease-in-out_infinite]"></span>
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 p-6 rounded-lg">
                  <Skeleton className="h-10 w-10 rounded-full mb-4 bg-white/20" />
                  <Skeleton className="h-6 w-3/4 mb-2 bg-white/20" />
                  <Skeleton className="h-4 w-1/2 mb-4 bg-white/20" />
                  <Skeleton className="h-3 w-full mb-2 bg-white/20" />
                  <Skeleton className="h-3 w-5/6 bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`bg-white/10 p-6 rounded-lg transition-all duration-300 ${
                  getProjectAnimationClass(project.id)
                } ${
                  hoveredProject === project.id ? 'transform -translate-y-3 shadow-lg shadow-gray-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`mb-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'scale-125 text-white' : ''
                }`}>
                  {project.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'text-gray-300' : ''
                }`}>
                  {project.title}
                </h3>
                {project.tools && (
                  <p className="text-white/80 mb-4">
                    <strong>Tools:</strong> {project.tools}
                  </p>
                )}
                <ul className="list-disc pl-5 space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li 
                      key={index} 
                      className={`text-white/90 transition-all duration-500 ${
                        hoveredProject === project.id 
                          ? 'opacity-100 translate-x-0' 
                          : loadedProjects.includes(project.id) 
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-6'
                      }`}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;