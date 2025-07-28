import React from 'react';
import { MapPin, Mail, Phone, Download, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-100 via-orange-100 to-yellow-50 text-gray-800 relative overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-orange-200 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Glowing Profile Image */}
          <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 p-1 animate-pulse">
            <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 p-1 animate-pulse shadow-lg">
               <img
               src="pic.jpg" // <-- replace this path with your actual image path
               alt="Srishti Bhatt"
               className="w-full h-full object-cover rounded-full"
               />
</div>
          </div>

          {/* Animated Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Srishti Bhatt
          </motion.h1>

          {/* Typing Effect */}
          <TypeAnimation
            sequence={[
              'Computer Science Engineering Student',
              1500,
              'Full Stack Developer',
              1500,
              'Problem Solver',
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          />

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-rose-500" />
              <span>Uttarakhand, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-rose-500" />
              <span>+91 9548121588</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-rose-500" />
              <span>srishtibhatt100@gmail.com</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-semibold shadow-md hover:shadow-rose-300 hover:scale-105 transition-all duration-300"
            >
              Explore My Work
            </button>
            <a
              href="/Srishti_Bhatt_Resume_Google.pdf"
              download
              className="px-8 py-4 border-2 border-orange-400 text-orange-500 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-orange-500 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
