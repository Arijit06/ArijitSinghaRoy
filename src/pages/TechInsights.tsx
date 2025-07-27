import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const TechInsights = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Sample articles - you can replace these with your actual articles
  const articles: Article[] = [
    {
      id: "1",
      title: "Contract Testing",
      excerpt: "Exploring the concept of contract testing and its importance in microservices architecture.",
      content: "Read the full article on LinkedIn: https://www.linkedin.com/pulse/practical-introduction-contract-testing-pact-arijit-singha-roy-khcvf",
      author: "Arijit Singha Roy",
      publishedDate: "2025-07-27",
      readTime: "4 min read",
      tags: ["Contract Testing", "Microservices"]
    },
    {
      id: "2",
      title: "Lets talk about Healenium- Self healing Scripts",
      excerpt: "A short introduction to Healenium- Self healing Scripts",
      content: "Read the full article on LinkedIn: https://www.linkedin.com/pulse/lets-talk-healenium-self-healing-scripts-arijit-singha-roy-5tqkf",
      author: "Arijit Singha Roy",
      publishedDate: "2025-06-18",
      readTime: "8 min read",
      tags: ["Testing", "Automation", "Healenium"]
    }   
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-orange-600 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Tech Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the latest trends, technologies, and insights in software development, 
            web technologies, and digital innovation.
          </p>
        </div>



        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-orange-400">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <Card key={article.id} className="bg-black/50 border-gray-700 hover:border-orange-400/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg text-white hover:text-orange-400 transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(article.publishedDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                  </div>
                  <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    onClick={() => setSelectedArticle(article)}
                  >
                    Read More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-black/90 border border-orange-500/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{selectedArticle.title}</h2>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {formatDate(selectedArticle.publishedDate)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {selectedArticle.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="prose prose-invert max-w-none">
                  {selectedArticle.content.includes('https://') ? (
                    <div className="text-gray-300 leading-relaxed">
                      <p className="mb-4">Read the full article on LinkedIn:</p>
                      <a 
                        href={`https://${selectedArticle.content.split('https://')[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Read Full Article on LinkedIn
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {selectedArticle.content || "Article content will be displayed here. This is a placeholder for the full article content."}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TechInsights; 