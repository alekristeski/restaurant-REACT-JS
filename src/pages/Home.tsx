import React from "react";
import SupriseMeBtn from "../components/molecules/SupriseMeBtn/SupriseMeBtn";
import Title from "../components/atoms/Title/Title";
import AllRestaurants from "../components/templates/AllRestaurants/AllRestaurants";
import PopularRestaurants from "../components/templates/PopularRestaurants/PopularRestaurants";
import Cuisines from "../components/molecules/Cuisines/Cuisines";

const Home = () => {
  return (
    <div>
      <Title title="Don't know what to eat" />
      <SupriseMeBtn />
      <Title title="Our most popular restaurants" />
      <PopularRestaurants />
      <Title title="Cuisines" />
      <Cuisines />
      <Title title="All restaurants" />
      <AllRestaurants />
    </div>
  );
};

export default Home;
