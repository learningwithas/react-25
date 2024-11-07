import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Accordium from "./components/1_Accordian/Accordium";
import Projects from "./Pages/Projects";
import Star from "./components/2_Star_Rating/Star";
import Slider from "./components/3_Slider/Slider";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container m-auto bg-slate-300">
        <Navbar />

        <div className="flex">
          <Sidebar />

          <div className="routes m-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/accordium" element={<Accordium />} />
              <Route path="/star-rating" element={<Star />} />
              <Route path="/slider" element={<Slider />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
