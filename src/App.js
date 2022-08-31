import "./App.css";
import Card from "./components/Card";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://630f176d379256341887958d.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className={"upperline"}>
        <Categories />
        <Sort />
      </div>
      <div className={"content"}>
        {items.map((obj) => (
          <Card {...obj} key={obj.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
