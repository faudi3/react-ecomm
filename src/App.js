import "./App.css";
import Card from "./components/Card";
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"content"}>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
