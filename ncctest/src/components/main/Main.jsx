import React from "react";
import Carousel from "../carousel/Carousel";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Services from "../services/Services";
import Team from "../team/Team";
import Work from "../work/Work";

function Main() {
  return (
    <div>
      <Header />
      <Carousel />
      <Work />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
