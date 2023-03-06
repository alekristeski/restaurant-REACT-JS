import React from "react";
import "./css/_global.scss";
import Header from "./components/layouts/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer/Footer";
import { Provider } from "./context/restaurantsContext";
import useFetch from "./hook/useFetch";
import CuisinesPage from "./pages/CuisinesPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RestaurantDetailPage from "./pages/DetailsRestaurantPage/RestaurantDetailPage";
import Loader from "./components/atoms/Loader/Loader";

const App = () => {
  const { data, status } = useFetch("http://localhost:5001/restaurants");

  return (
    <div className="App">
      {status === "pending" && <Loader />}
      <BrowserRouter>
        {data && (
          <Provider initialRestaurants={data}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<RestaurantDetailPage />} />
              <Route path="/cuisine/:name" element={<CuisinesPage />} />
              <Route
                path="/favourite-restaurants"
                element={<FavouritesPage />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Provider>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
