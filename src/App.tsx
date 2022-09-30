import "./App.css";
import Home from "./pages/Home";
import React from "react";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullCard from "./pages/FullCard";
import { Routes, Route } from "react-router-dom";

//  type ValueProps = {
//   searchValue: string;
//   setSearchValue: (value: string) => void;
// }

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cards/:id" element={<FullCard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
