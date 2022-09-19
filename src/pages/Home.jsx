import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import { fetchClothes } from "../redux/slices/clothesSlice";

const Home = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { items, status } = useSelector((state) => state.clothes);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       `https://630f176d379256341887958d.mockapi.io/items?${
  //         categoryId > 0 ? `category=${categoryId}` : ""
  //       }&sortBy=${sortType}&order=asc`
  //     )
  //     .then((res) => {
  //       setItems(res.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //     });
  // }, [categoryId, sortType, searchValue]);
  const getClothes = async () => {
    dispatch(fetchClothes({ categoryId, sortType }));
  };

  React.useEffect(() => {
    getClothes();
  }, [categoryId, sortType, searchValue]);

  const clothes = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <Card key={obj.id} {...obj} />);

  const skeletons = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className={"upperline"}>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Sort />
      </div>
      <div className={"content"}>
        {status === "error" ? (
          <div>
            <h2>Clothes not rendered</h2>
          </div>
        ) : status === "loading" ? (
          skeletons
        ) : (
          clothes
        )}
      </div>
    </>
  );
};
export default Home;
