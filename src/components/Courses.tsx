import { useState } from "react";

type Course = {
  name: string;
  description: string;
  image: string;
  levels: number;
  sessions: number;
  priceGroup: string;
  pricePrivate: string;
  type: string;
  roadmap: string[];
  topics: string[];
  outcomes: string[];
  projects: string[];
};

const Courses = () => {
  const courses: Course[] = [
    {
      name: "React",
      image: "/assets/re.png",
      description: "Learn React basics, hooks, and build interactive UIs.",
      levels: 3,
      sessions: 12,
      priceGroup: "220€",
      pricePrivate: "300€",
      type: "Group & Private",
      roadmap: [
        "Level 1: JSX, Components, and Props",
        "Level 2: State, Events, and Hooks",
        "Level 3: Routing, Context API, and Project Building",
      ],
      topics: [
        "JSX and Virtual DOM",
        "Functional Components",
        "useState, useEffect hooks",
        "React Router",
        "Context API",
        "Building reusable components",
      ],
      outcomes: [
        "Build single-page applications",
        "Use React hooks effectively",
        "Manage app state",
        "Deploy React apps",
      ],
      projects: [
        "Personal Portfolio Website",
        "To-do App",
        "Mini E-commerce Store",
      ],
    },
    {
      name: "JavaScript",
      image: "/assets/javas.jpeg",
      description: "Master ES6 and DOM manipulation.",
      levels: 2,
      sessions: 10,
      priceGroup: "180€",
      pricePrivate: "250€",
      type: "Group & Private",
      roadmap: [
        "Level 1: Basics, Variables, and Data Types",
        "Level 2: Functions, ES6 features, and DOM manipulation",
      ],
      topics: [
        "Variables and Data Types",
        "Functions and Scope",
        "Arrow functions",
        "Promises and async/await",
        "DOM Traversing and Events",
      ],
      outcomes: [
        "Write clean JavaScript code",
        "Understand asynchronous JS",
        "Manipulate DOM elements",
      ],
      projects: [
        "Interactive Quiz",
        "Dynamic Gallery",
      ],
    },
    {
      name: "HTML & CSS",
      image: "/assets/HT.jpg",
      description: "Build beautiful static websites.",
      levels: 1,
      sessions: 8,
      priceGroup: "130€",
      pricePrivate: "180€",
      type: "Group & Private",
      roadmap: [
        "Level 1: HTML basics, elements, and structure",
        "Level 2: CSS fundamentals and layouts",
        "Level 3: Responsive design and Flexbox/Grid",
      ],
      topics: [
        "HTML Tags and Attributes",
        "CSS Selectors and Properties",
        "Box Model",
        "Flexbox and Grid Layout",
        "Responsive Design",
      ],
      outcomes: [
        "Create semantic HTML pages",
        "Style websites using CSS",
        "Build responsive layouts",
      ],
      projects: [
        "Personal Profile Page",
        "Landing Page Design",
      ],
    },
    {
      name: "Python",
      image: "/assets/PY.jpeg",
      description: "Beginner-friendly Python programming.",
      levels: 2,
      sessions: 10,
      priceGroup: "160€",
      pricePrivate: "220€",
      type: "Group & Private",
      roadmap: [
        "Level 1: Python syntax, variables, and data types",
        "Level 2: Control flow, functions, and modules",
      ],
      topics: [
        "Variables and Data Types",
        "Conditionals and Loops",
        "Functions and Modules",
        "File Handling",
        "Basic OOP Concepts",
      ],
      outcomes: [
        "Write Python scripts",
        "Understand core programming concepts",
        "Build small console applications",
      ],
      projects: [
        "Calculator",
        "Simple Game (e.g., Guess Number)",
      ],
    },
    {
      name: "C++",
      image: "/assets/c++.jpeg",
      description: "Understand C++ OOP and algorithms.",
      levels: 3,
      sessions: 12,
      priceGroup: "200€",
      pricePrivate: "270€",
      type: "Group & Private",
      roadmap: [
        "Level 1: C++ basics and syntax",
        "Level 2: Functions, arrays, and pointers",
        "Level 3: Classes, objects, and algorithms",
      ],
      topics: [
        "Basic Syntax and Data Types",
        "Control Statements",
        "Pointers and References",
        "Classes and OOP Principles",
        "Standard Template Library (STL)",
      ],
      outcomes: [
        "Write efficient C++ code",
        "Understand memory management",
        "Implement OOP in C++",
      ],
      projects: [
        "Bank Management System",
        "Simple Sorting Algorithms",
      ],
    },
    {
      name: "C#",
      image: "/assets/cs.jpeg",
      description: "C# fundamentals and .NET basics.",
      levels: 2,
      sessions: 10,
      priceGroup: "180€",
      pricePrivate: "240€",
      type: "Group & Private",
      roadmap: [
        "Level 1: C# syntax and basic programming",
        "Level 2: OOP concepts and .NET introduction",
      ],
      topics: [
        "Variables and Data Types",
        "Control Structures",
        "Classes and Objects",
        "Exception Handling",
        "Introduction to .NET Framework",
      ],
      outcomes: [
        "Develop console and basic GUI apps",
        "Understand OOP and .NET basics",
      ],
      projects: [
        "To-do Application",
        "Simple Calculator",
      ],
    },
    {
      name: "Java",
      image: "/assets/java.jpeg",
      description: "Java OOP and backend essentials.",
      levels: 3,
      sessions: 12,
      priceGroup: "210€",
      pricePrivate: "280€",
      type: "Group & Private",
      roadmap: [
        "Level 1: Java syntax and basic programming",
        "Level 2: OOP and Exception Handling",
        "Level 3: Collections and Backend Introduction",
      ],
      topics: [
        "Basic Syntax and Data Types",
        "Classes and Objects",
        "Inheritance and Polymorphism",
        "Exception Handling",
        "Collections Framework",
      ],
      outcomes: [
        "Write Java applications",
        "Understand OOP deeply",
        "Start backend development",
      ],
      projects: [
        "Student Management System",
        "Simple REST API (conceptual)",
      ],
    },
    {
      name: "Scratch",
      image: "/assets/s.jpeg",
      description: "Visual programming for kids.",
      levels: 1,
      sessions: 6,
      priceGroup: "100€",
      pricePrivate: "140€",
      type: "Group & Private",
      roadmap: [
        "Level 1: Scratch interface and blocks",
        "Level 2: Creating animations and games",
      ],
      topics: [
        "Drag and Drop Coding",
        "Events and Control Blocks",
        "Sprites and Costumes",
        "Basic Game Design",
      ],
      outcomes: [
        "Understand programming logic",
        "Create simple games and animations",
      ],
      projects: [
        "Animated Story",
        "Simple Maze Game",
      ],
    },
    {
      name: "SQL",
      image: "/assets/sql.jpeg",
      description: "Databases and SQL queries.",
      levels: 2,
      sessions: 8,
      priceGroup: "150€",
      pricePrivate: "200€",
      type: "Group & Private",
      roadmap: [
        "Level 1: Database basics and SELECT queries",
        "Level 2: Joins, subqueries, and database design",
      ],
      topics: [
        "Relational Databases Concepts",
        "SELECT, INSERT, UPDATE, DELETE",
        "JOIN Operations",
        "Normalization",
        "Indexes and Keys",
      ],
      outcomes: [
        "Write SQL queries",
        "Design basic databases",
        "Understand relational models",
      ],
      projects: [
        "Library Database",
        "Sales Reporting Queries",
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<string>("roadmap");

  return (
    <>
      <div className="courses-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-4 cursor-pointer"
            onClick={() => {
              setSelectedCourse(course);
              setActiveTab("roadmap");
            }}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              {course.name}
            </h3>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
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
            <p className="mt-2"><b>Levels:</b> {selectedCourse.levels}</p>
            <p className="mt-2"><b>Sessions:</b> {selectedCourse.sessions}</p>
            <p className="mt-2"><b>Price (Group):</b> {selectedCourse.priceGroup}</p>
            <p className="mt-2"><b>Price (Private):</b> {selectedCourse.pricePrivate}</p>
            <p className="mt-2"><b>Type:</b> {selectedCourse.type}</p>

            <div className="tabs mt-4 border-b flex gap-4">
              {["roadmap", "topics", "outcomes", "projects"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 ${
                    activeTab === tab
                      ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="tab-content mt-4 max-h-60 overflow-y-auto">
              {activeTab === "roadmap" && (
                <ul className="list-disc pl-5">
                  {selectedCourse.roadmap.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              )}

              {activeTab === "topics" && (
                <ul className="list-disc pl-5">
                  {selectedCourse.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              )}

              {activeTab === "outcomes" && (
                <ul className="list-disc pl-5">
                  {selectedCourse.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              )}

              {activeTab === "projects" && (
                <ul className="list-disc pl-5">
                  {selectedCourse.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;

