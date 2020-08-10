import React from "react";
import Navbar from "../Comp/Navbar";
import Footer from "../Comp/Footer";
import Intros from "../Comp/Intros";

const IntroPage = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="App-body">
        <Intros />
        <Footer />
      </section>
    </div>
  );
};

export default IntroPage;
