import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./views/main/Main";
import Skills from "./views/skills/Skills";
// import Projects from "./views/projects/Projects";
// import About from "./views/about/About";
// import Contact from "./views/contact/Contact";

function App() {
  return (
    <div className="app-body">
      <Header />
      <Main />
      <Skills />
      {/* <Projects /> */}
      <div className="app-sidebyside">
        {/* <About /> */}
        {/* <Contact /> */}
      </div>
      <footer className="app-footer">&copy; 2019 Michael Laufersweiler</footer>
    </div>
  );
}

export default App;
