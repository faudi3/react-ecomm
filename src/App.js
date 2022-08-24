import "./App.css";
import Card from "./components/Card";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import clothes from "./assets/clothes.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"upperline"}>
        <Categories />
        <Sort />
      </div>
      <div className={"content"}>
        {clothes.map((obj) => (
          <Card {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
