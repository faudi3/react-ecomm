import "./App.css";
import Card from "./components/Card";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Skeleton from "./components/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://630f176d379256341887958d.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTimeout(() => {
          setItems(json);
          setIsLoading(false);
        }, 1000);
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
        {isLoading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default App;
