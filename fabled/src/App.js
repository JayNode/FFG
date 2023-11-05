import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BottomNav from "./components/bottomNav/bottomNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import Creatures from "./views/creatures/creatures";
import Habitats from "./views/habitats/habitats";
import Fieldguide from "./views/fieldguide/fieldguide";
import About from "./views/about/about";
import Donate from "./views/donate/donate";
import SignUp from "./views/signUp/signUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/creatures" element={<Creatures />} />
        <Route path="/habitats" element={<Habitats />} />
        <Route path="/fieldguide" element={<Fieldguide />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
