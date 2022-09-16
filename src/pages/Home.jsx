import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import axios from "axios";

const Home = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://630f176d379256341887958d.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType}&order=asc`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue]);

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     `https://630f176d379256341887958d.mockapi.io/items?${
  //       categoryId > 0 ? `category=${categoryId}` : ""
  //     }&sortBy=${sortType}&order=asc`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setTimeout(() => {
  //         setItems(json);
  //         setIsLoading(false);
  //       }, 1000);
  //     });
  //   window.scrollTo(0, 0);
  // }, [categoryId, sortType, searchValue]);

  return (
    <>
      <div className={"upperline"}>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Sort />
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
