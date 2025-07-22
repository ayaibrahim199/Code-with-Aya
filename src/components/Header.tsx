import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Code with Aya</h1>
        <nav>
          <ul className="flex space-x-6 text-blue-600 font-medium">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
