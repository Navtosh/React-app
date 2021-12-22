import "./styles.css";
import React from "react";
// Navtosh Adhikari

//import mainLogo from "../public/images/logo.png";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { MainContaint } from "./components/MainContaint";
import { ContactStrip } from "./components/ContactStrip";
import { Footer } from "./components/Footer";
import { FooterBottom } from "./components/FooterBottom";

function App() {
  return (
    <div className="main_data">
      <Header />
      <Banner />
      <MainContaint />
      <ContactStrip />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;

// Navtosh Adhikari
