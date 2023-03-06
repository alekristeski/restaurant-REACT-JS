import React, { useContext } from "react";
import Title from "../components/atoms/Title/Title";
import WrapperRestaurantCards from "../components/atoms/WrapperRestaurantCards/WrapperRestaurantCards";
import RestaurantCard from "../components/organisms/RestaurantCard/RestaurantCard";
import { Context } from "../context/restaurantsContext";

const CuisinesPage = () => {
  const { typeCuisine, currentLocation } = useContext(Context);

  return (
    <div>
      <Title title={`${currentLocation} restaurants`} />
      <WrapperRestaurantCards>
        <>
          {typeCuisine.map((type) => {
            return <RestaurantCard key={type.id} restaurant={type} />;
          })}
        </>
      </WrapperRestaurantCards>
    </div>
  );
};

export default CuisinesPage;
