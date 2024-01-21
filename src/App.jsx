import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFound";
import MenuList from "./pages/menu/MenuList";
import AboutUs from "./pages/about/AboutUs";

import { UseDispatch, useDispatch } from "react-redux";
import { getRandomUser } from "./redux/MenuList/operations";


function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await dispatch(getRandomUser());
  };
  fetchData();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/menu" element={<MenuList />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <button onCkic={fetchData()}>ufdh</button> */}
    </>
  );
}


export default App;
