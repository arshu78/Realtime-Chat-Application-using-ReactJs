import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContextFun from "./context/ContextProvider";
import {Helmet} from "react-helmet";
function App() {
  return (
    <ContextFun>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Fun Chat</title>
            </Helmet>
      <Navbar />
      <Home />
    </ContextFun>
  );
}

export default App;
