import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-700">
          Code with Aya is a learning platform designed for kids and moms to learn programming 
          in a simple, fun, and engaging way. We provide interactive courses and real-world projects 
          to help you grow step by step.
        </p>
      </div>
    </section>
  );
};

export default About;
