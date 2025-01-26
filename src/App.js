import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/CategoryList";
import Items from "./Components/Items";
import Wishlist from "./Components/wishlist";
import ItemDetails from "./Components/Itemdetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:type" element={<Items />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
