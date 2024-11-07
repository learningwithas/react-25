import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

const Home = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      description: "Building responsive, component-based UIs",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      description: "Creating backend services and APIs",
    },
    {
      name: "Database Management",
      icon: <FaDatabase />,
      description: "Handling data with SQL and NoSQL databases",
    },
    {
      name: "JavaScript",
      icon: <FaCode />,
      description: "Developing functionality for web applications",
    },
    {
      name: "Mobile Development",
      icon: <FaMobileAlt />,
      description: "Responsive and cross-platform mobile apps",
    },
    {
      name: "Tooling & Automation",
      icon: <FaTools />,
      description: "Optimizing workflows with build tools and CI/CD",
    },
  ];

  return (
    <div className="home-page bg-white p-5 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        About My Work and Skills
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome! Here, I share some of my skills and the work I’ve been involved
        in. My focus is on building modern, efficient, and scalable applications
        that enhance user experience and meet business needs.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item p-4 border border-blue-500 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-blue-600">{skill.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  {skill.name}
                </h3>
                <p className="text-gray-700">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">
        My Work
      </h2>
      <p className="text-gray-700 mb-4">
        Here are a few projects I have worked on, ranging from web development
        to backend services.
      </p>
      <ul className="space-y-4">
        <li className="p-4 border border-blue-500 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600">
            Project 1: Portfolio Website
          </h3>
          <p className="text-gray-700">
            A personal portfolio website showcasing my work and skills, built
            with React and Tailwind CSS.
          </p>
        </li>
        <li className="p-4 border border-blue-500 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600">
            Project 2: E-commerce Platform
          </h3>
          <p className="text-gray-700">
            A full-stack e-commerce platform with React, Node.js, and MongoDB,
            featuring product listings, user authentication, and payment
            processing.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
