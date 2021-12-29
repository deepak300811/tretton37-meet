import axios from "axios";
import React from "react";
import "./App.css";
import Container from "./container";

function App() {
  console.log("key=", process.env.REACT_APP_API_KEY);
  const auth: string = process.env.REACT_APP_API_KEY || "";
  axios.defaults.headers.common["authorization"] = auth;

  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
