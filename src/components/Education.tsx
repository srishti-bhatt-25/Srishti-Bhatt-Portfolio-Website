import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Graphic Era Hill University",
      location: "Dehradun, Uttarakhand",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "July 2023 - July 2027",
      grade: "SGPA: NOT DECLARED",
      status: "Current Semester: Fifth",
      type: "university"
    },
    {
      institution: "D.S.B. International Public School",
      location: "Rishikesh, Uttarakhand",
      degree: "10th Grade",
      duration: "2022 - 2023",
      grade: "96%",
      type: "school"
    },
    {
      institution: "D.S.B. International Public School",
      location: "Rishikesh, Uttarakhand",
      degree: "12th Grade",
      duration: "2020 - 2021",
      grade: "75.33%",
      type: "school"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey has been focused on building a strong foundation in computer science and technology.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block"></div>
              )}
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        edu.type === 'university' 
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600' 
                          : 'bg-gradient-to-r from-pink-600 to-purple-600'
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.institution}</h3>
                          <p className="text-lg text-purple-600 font-semibold mb-2">{edu.degree}</p>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center text-gray-600 mb-2 lg:justify-end">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center text-green-600 font-semibold lg:justify-end">
                            <Award className="w-4 h-4 mr-2" />
                            <span>{edu.grade}</span>
                          </div>
                          {edu.status && (
                            <div className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
                              {edu.status}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Gradient Border */}
                <div className={`h-1 ${
                  edu.type === 'university' 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600' 
                    : 'bg-gradient-to-r from-pink-600 to-purple-600'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">Result Not Declared</div>
              <div className="text-gray-600">Current SGPA</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">96.17%</div>
              <div className="text-gray-600">10th Grade Score</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">5th</div>
              <div className="text-gray-600">Current Semester</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;