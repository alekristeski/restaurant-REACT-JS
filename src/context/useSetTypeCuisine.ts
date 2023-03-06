import { useEffect, useState } from "react";
import { restaurantsInterface } from "../interfaces/restaurantsInterface";

export const useSetTypeCuisine = (
  restaurants: restaurantsInterface[],
  currentLocation: string,
) => {
  const [typeCuisine, setTypeCuisine] = useState<restaurantsInterface[]>([]);
  useEffect(() => {
    setTypeCuisine(
      restaurants.filter(
        (restaurant) => restaurant.restauranttype === currentLocation,
      ),
    );
  }, [currentLocation, restaurants]);
  return typeCuisine;
};
