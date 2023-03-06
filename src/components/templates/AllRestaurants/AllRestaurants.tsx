import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
import RestaurantCard from "../../organisms/RestaurantCard/RestaurantCard";
import WrapperRestaurantCards from "../../atoms/WrapperRestaurantCards/WrapperRestaurantCards";

const AllRestaurants = () => {
  const { restaurants } = useContext(Context);

  return (
    <WrapperRestaurantCards>
      <>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </>
    </WrapperRestaurantCards>
  );
};

export default AllRestaurants;
