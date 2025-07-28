import React from 'react';
import { Github, ExternalLink, Shield, Phone, Search, Brain, Code, Database, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cyber Safe Cafe Management System",
      description: "A comprehensive system that monitors and manages cyber cafe operations securely with real-time monitoring and reporting capabilities.",
      technologies: ["Python", "MySQL", "Data Management", "User Auth", "Real-time Monitoring"],
      features: [
        "Reduces privacy issues by 30%",
        "Real-time monitoring and reporting",
        "Secure user authentication",
        "Data management system"
      ],
      github: "https://github.com/srishti-bhatt-25/Cyber-Safe-Cafe",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      status: "Completed"
    },
    {
      title: "Smart PhoneBook",
      description: "An efficient contact management system built in C with advanced data structures for optimal performance.",
      technologies: ["C", "Arrays", "Structures", "Sorting", "Searching"],
      features: [
        "Add/edit/delete/search contacts",
        "Menu-based user interface",
        "Efficient navigation system",
        "Optimized data structures"
      ],
      github: "https://github.com/srishti-bhatt-25/Smart-PhoneBook",
      icon: <Phone className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      status: "Completed"
    },
    {
      title: "MyCV Search",
      description: "A Google-like search interface that redirects users to resume/CV with clean and intuitive design.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      features: [
        "Google-like UI design",
        "Search functionality",
        "Resume redirection",
        "Responsive layout"
      ],
      github: "https://github.com/srishti-bhatt-25/MyCV-Search",
      icon: <Search className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      status: "Completed"
    },
    {
      title: "Breast Cancer Prediction Model",
      description: "Machine learning model for breast cancer prediction using advanced algorithms and data analysis techniques.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Classification"],
      features: [
        "k-NN algorithm implementation",
        "Decision Trees (Classification, Regression)",
        "Entropy and Gini Index analysis",
        "Information Gain calculation"
      ],
      github: "#",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-500",
      status: "In Progress"
    }
  ];

  const getTechIcon = (tech: string) => {
    if (tech.toLowerCase().includes('python')) return <Code className="w-4 h-4" />;
    if (tech.toLowerCase().includes('mysql')) return <Database className="w-4 h-4" />;
    if (tech.toLowerCase().includes('html') || tech.toLowerCase().includes('css')) return <Monitor className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
           <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> My Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border border-gray-100">
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/90">
                    {project.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.description}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  {project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                      <Github className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">Check out my GitHub profile for more projects and contributions.</p>
            <a
              href="https://github.com/srishti-bhatt-25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              <Github className="w-5 h-5" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;