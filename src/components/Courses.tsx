
import React, { useState } from "react";

const Courses = () => {
  const courses = [
    { name: "React", image: "/assets/re.png", description: "Learn how to build modern web apps with React and its ecosystem." },
    { name: "JavaScript", image: "/assets/javas.jpeg", description: "Master the language of the web with JavaScript." },
    { name: "HTML & CSS", image: "/assets/HT.jpg", description: "Understand web structure and design using HTML and CSS." },
    { name: "Python", image: "/assets/PY.jpeg", description: "A beginner-friendly language for data, web, and automation." },
    { name: "C++", image: "/assets/c++.jpeg", description: "Learn C++ for system programming and game development." },
    { name: "C#", image: "/assets/cs.jpeg", description: "C# for building apps, games, and enterprise software." },
    { name: "Java", image: "/assets/java.jpeg", description: "Master Java for backend development and Android apps." },
    { name: "Scratch", image: "/assets/s.jpeg", description: "A fun, visual language to start coding, great for kids." },
    { name: "SQL", image: "/assets/sql.jpeg", description: "Learn to query and manage databases using SQL." },
  ];

  const [selectedCourse, setSelectedCourse] = useState<null | { name: string; description: string; image: string }>(null);

  return (
    <div className="relative">
      {/* Course Cards */}
      <div className="courses-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-4 cursor-pointer"
            onClick={() => setSelectedCourse(course)}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">{course.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ✖
            </button>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedCourse.name}</h2>
            <p className="text-gray-700">{selectedCourse.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
