import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFound";
import MenuList from "./pages/menu/MenuList";
import AboutUs from "./pages/about/AboutUs";
import Visit from './pages/visit/Visit';
import Reviews from "./components/reviews/Reviews";


function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="about" element={<AboutUs />} />
        <Route path='visit' element={<Visit/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Reviews/>
      {/* <button onCkic={fetchData()}>ufdh</button> */}
    </>
  );
}


export default App;
