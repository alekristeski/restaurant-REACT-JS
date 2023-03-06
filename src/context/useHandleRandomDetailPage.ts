import { NavigateFunction } from "react-router-dom";
import { restaurantsInterface } from "../interfaces/restaurantsInterface";

export const useHandleRandomDetailPage = (
  restaurants: restaurantsInterface[],
  navigate: NavigateFunction,
) => {
  const handleRandomDetailPage = () => {
    const randomNumber = Math.floor(Math.random() * restaurants.length - 1);
    const supriseID = restaurants[randomNumber].id;
    navigate(`/${supriseID}`);
  };
  return handleRandomDetailPage;
};
