import "./App.css";
import Home from "./pages/Home";
import React from "react";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import ReactSwitch from "react-switch";
export const ThemeContex = React.createContext(null);

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContex.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          theme={theme}
          toggleTheme={toggleTheme}
        />

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
    </ThemeContex.Provider>
  );
}

export default App;
