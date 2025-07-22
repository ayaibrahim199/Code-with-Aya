import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 container mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">Email us at: <a href="mailto:iayaaqel@gmail.com" className="underline text-blue-600">iayaaqel@gmail.com</a></p>
      <p className="text-gray-700">We’d love to hear from you!</p>
    </section>
  );
};

export default Contact;
