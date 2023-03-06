import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
import WrapperRestaurantCards from "../../atoms/WrapperRestaurantCards/WrapperRestaurantCards";
import RestaurantCard from "../../organisms/RestaurantCard/RestaurantCard";

const PopularRestaurants = () => {
  const { mostReviewedRestaurants } = useContext(Context);

  return (
    <WrapperRestaurantCards>
      <>
        {mostReviewedRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </>
    </WrapperRestaurantCards>
  );
};

export default PopularRestaurants;
