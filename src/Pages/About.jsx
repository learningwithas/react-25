import React from "react";

const About = () => {
  return (
    <div className="about-page bg-white p-5 rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our application! This project is a demonstration of basic
        React functionality with a responsive layout, featuring a sidebar and
        navbar for easy navigation. It includes routes to showcase different
        pages and dynamic components to create a more interactive experience.
      </p>
      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        Our Mission
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Our goal is to provide a foundational setup for developers to build
        projects using React and explore core features like routing, state
        management, and responsive design.
      </p>
      <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        Technologies Used
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>React - For creating dynamic and reusable UI components</li>
        <li>React Router - For managing navigation between pages</li>
        <li>Tailwind CSS - For quick and responsive styling</li>
        <li>React Icons - For adding visually appealing icons</li>
      </ul>
    </div>
  );
};

export default About;
