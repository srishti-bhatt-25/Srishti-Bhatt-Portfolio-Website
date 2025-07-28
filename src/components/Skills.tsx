import React from 'react';
import { Code, Database, Palette, Brain, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 60, note: "Learning" }
      ]
    },
    {
      title: "Technologies & Tools",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "UI Design", level: 75 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "k-NN Algorithm", level: 70, note: "Theory" },
        { name: "Decision Trees", level: 70, note: "Classification & Regression" },
        { name: "Entropy & Gini Index", level: 65 },
        { name: "Information Gain", level: 65 }
      ]
    },
    {
      title: "Data Structures",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-red-500 to-orange-500",
      skills: [
        { name: "Arrays", level: 90 },
        { name: "Structures", level: 85 },
        { name: "Sorting Algorithms", level: 80 },
        { name: "Searching Algorithms", level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "from-green-500 to-emerald-500";
    if (level >= 70) return "from-blue-500 to-cyan-500";
    if (level >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's an overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  <div className="text-white/90">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          {skill.note && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {skill.note}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            Skill Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Programming</h4>
              <p className="text-gray-600 text-sm">Strong foundation in C, C++, and Python with focus on problem-solving</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Data Structures</h4>
              <p className="text-gray-600 text-sm">Proficient in implementing and optimizing various data structures</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Machine Learning</h4>
              <p className="text-gray-600 text-sm">Understanding of ML algorithms and their theoretical foundations</p>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white text-purple-700 rounded-full font-medium shadow-sm">
              Advanced JavaScript
            </span>
            <span className="px-4 py-2 bg-white text-purple-700 rounded-full font-medium shadow-sm">
              React.js
            </span>
            <span className="px-4 py-2 bg-white text-purple-700 rounded-full font-medium shadow-sm">
              Machine Learning Implementation
            </span>
            <span className="px-4 py-2 bg-white text-purple-700 rounded-full font-medium shadow-sm">
              Full Stack Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;