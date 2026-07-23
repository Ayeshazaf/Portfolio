import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Projects from "./pages/project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/hobbies" element={<Hobbies />} />
    </Routes>
  );
}