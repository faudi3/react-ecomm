import React from "react";
import Skeleton from "../components/Skeleton";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSort } from "../redux/slices/filterSlice";
import { fetchClothes } from "../redux/slices/clothesSlice";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

type HomeProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const Home: React.FC<HomeProps> = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const sortType = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );
  const { items, status } = useSelector((state: RootState) => state.clothes);

  const onClickCategory = (id: number) => {
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
    //@ts-ignore
    dispatch(fetchClothes({ categoryId, sortType }));
  };

  React.useEffect(() => {
    getClothes();
  }, [categoryId, sortType, searchValue]);

  const clothes = items
    .filter((obj: any) => {
      return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((obj: any) => (
      <Link key={obj.id} to={`/cards/${obj.id}`}>
        <Card {...obj} />
      </Link>
    ));

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
