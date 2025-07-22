

import { useState } from "react";

type Course = {
  name: string;
  description: string;
  image: string;
};

const Courses = () => {
  const courses: Course[] = [
    { name: "React", image: "/assets/re.png", description: "Learn React basics and hooks." },
    { name: "JavaScript", image: "/assets/javas.jpeg", description: "Master ES6 and DOM manipulation." },
    { name: "HTML & CSS", image: "/assets/HT.jpg", description: "Build beautiful static websites." },
    { name: "Python", image: "/assets/PY.jpeg", description: "Beginner-friendly Python programming." },
    { name: "C++", image: "/assets/c++.jpeg", description: "Understand C++ OOP and algorithms." },
    { name: "C#", image: "/assets/cs.jpeg", description: "C# fundamentals and .NET basics." },
    { name: "Java", image: "/assets/java.jpeg", description: "Java OOP and backend essentials." },
    { name: "Scratch", image: "/assets/s.jpeg", description: "Visual programming for kids." },
    { name: "SQL", image: "/assets/sql.jpeg", description: "Databases and SQL queries." },
  ];

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <>
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

      {/* Modal for selected course */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl font-bold"
              onClick={() => setSelectedCourse(null)}
            >
              &times;
            </button>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedCourse.name}</h2>
            <p className="mt-2 text-gray-700">{selectedCourse.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
