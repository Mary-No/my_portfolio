import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MyProjects from "./components/MyProjects/MyProjects";
import ProfessionalQuality from "./components/ProfessionalQuality/ProfessionalQuality";

function App() {
  return (
      <div className="container">
          <Header/>
          <AboutMeSection/>
          <MyProjects/>
          <ProfessionalQuality/>
      </div>
  );
}

export default App;
