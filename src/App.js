import "./App.css";
import Home from "./pages/Home";
import React from "react";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);
  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
