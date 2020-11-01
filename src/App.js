import React from "react";
import "./App.css";
import Banner from "../src/components/Banner";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Banner/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
