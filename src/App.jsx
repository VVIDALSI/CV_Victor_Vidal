import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Card from "./components/card/Card";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import SocialMedia from "./components/Social_media/SocialMedia";
import References from "./components/references/References";
import stlApp from "./App.module.css"
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
  return (
    <div className={stlApp.appContainer}>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/References" element={<References />} />
      </Routes>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
