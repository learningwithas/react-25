import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const Projects = [
    {
      name: `Accordium`,
    },
    {
      name: `Star-Rating`,
    },
    {
      name: `Slider`,
    },
  ];

  return (
    <div className="home-page bg-white p-5 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Welcome to Our Project Showcase
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore our portfolio of projects created using React, demonstrating a
        range of skills and features from responsive layouts to dynamic
        components. Each project link below provides more insight into what
        we've built and aims to showcase our development capabilities.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Projects.map((project, index) => (
          <li
            key={index}
            className="border border-blue-500 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Link
              to={`/${project.name.toLocaleLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
