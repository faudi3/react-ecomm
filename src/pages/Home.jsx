import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";

const Home = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //these 2
  const navigate = useNavigate();
  const isMounted = React.useRef(false);
  //this
  const sortItems = [
    { name: "price", sortProperty: "price" },
    { name: "gender", sortProperty: "for" },
    { name: "alphabet", sortProperty: "title" },
  ];

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  //this
  const fetchclothes = () => {
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
  };
  //these 3
  //если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType]);
  // если был первый рендер то проверяем url параметры и сохраняем в редаксе
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortItems.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);
  // если был первый рендер то запрашиваем одежду
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchclothes();
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue]);

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
