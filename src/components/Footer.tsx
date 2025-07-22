import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Code with Aya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
