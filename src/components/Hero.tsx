import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Learn Coding with Fun!
      </h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Join Code with Aya to explore interactive programming courses for kids and moms. 
        Build real projects with React, JavaScript, and more!
      </p>
      <a
        href="#courses"
        className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
      >
        View Courses
      </a>
    </section>
  );
};

export default Hero;
