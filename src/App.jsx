import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Router>
        <Nav query={query} setQuery={setQuery} />
        <Routes>
          <Route
            path="/"
            element={<Home query={query} setQuery={setQuery} />}
          ></Route>
          <Route
            path="/shop"
            element={<Shop query={query} setQuery={setQuery} />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
