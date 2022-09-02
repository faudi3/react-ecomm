import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

const Home = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0); //categoryId
  const [sortType, setSortType] = React.useState({
    name: "price",
    sort: "price",
  }); //sortType
  console.log(sortType);
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://630f176d379256341887958d.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sort}&order=asc`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTimeout(() => {
          setItems(json);
          setIsLoading(false);
        }, 1000);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);
  return (
    <>
      <div className={"upperline"}>
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <div className={"content"}>
        {isLoading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) => {
                if (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
export default Home;
