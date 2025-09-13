import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/About.jsx";
import Project from "./components/project/Project.jsx";
import Skill from "./components/skill/Skill.jsx";
import Contect from "./components/contect/Contect.jsx";
import Notfound from "./components/shared/notFound.jsx";
// import Footer from './components/shared/Footer.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/skills" element={<Skill/>} />
      <Route path="/contect" element={<Contect/>} />
      <Route path="*" element={<Notfound/>} />
      

    </Routes>
  </BrowserRouter>
);
