import React from 'react';
import { Award, Users, Lightbulb, MessageCircle, Globe, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Google Girl Hackathon",
      description: "Advanced to coding round"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AlgoUniversity Tech Fellowship",
      description: "Qualified Stage-1 coding round (Sept 2024)"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "National Innovation Foundation",
      description: "Selected at State Level for innovative idea (Dec 2020)"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "GirlScript Summer of Code",
      description: "Contributor at GSSoC 2024"
    }
  ];

  const softSkills = [
    { icon: <Users className="w-5 h-5" />, skill: "Leadership & Public Speaking" },
    { icon: <Users className="w-5 h-5" />, skill: "Team Collaboration" },
    { icon: <Lightbulb className="w-5 h-5" />, skill: "Problem Solving" }
  ];

  const hobbies = [
    { icon: <MessageCircle className="w-5 h-5" />, hobby: "Public Speaking (Debates, MUNs)" },
    { icon: <Heart className="w-5 h-5" />, hobby: "Collecting Unique Stones" },
    { icon: <Globe className="w-5 h-5" />, hobby: "Exploring Nature" }
  ];

  const languages = ["English", "Hindi", "German (Beginner)"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science Engineering student at Graphic Era Hill University with a strong foundation in programming and problem-solving. 
            Currently in my third semester, I'm dedicated to building innovative solutions and contributing to the tech community.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🏆 Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-purple-600 mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills and Interests Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="w-6 h-6 text-purple-600 mr-2" />
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-purple-600">{item.icon}</div>
                  <span className="text-gray-700">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Heart className="w-6 h-6 text-pink-600 mr-2" />
              Hobbies
            </h3>
            <div className="space-y-4">
              {hobbies.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-pink-600">{item.icon}</div>
                  <span className="text-gray-700">{item.hobby}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Globe className="w-6 h-6 text-indigo-600 mr-2" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Certifications */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>B Certificate holder, National Service Scheme (NSS)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Deputy Secretary General at DSBMUN</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Naukri Campus Young Turks - Stage-1 qualified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>UI/UX Design Course (Infosys Springboard)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;