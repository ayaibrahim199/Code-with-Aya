import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
