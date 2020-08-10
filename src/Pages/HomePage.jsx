import React from "react";
import Navbar from "../Comp/Navbar";
import Footer from "../Comp/Footer";

const HomePage = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="App-body">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
