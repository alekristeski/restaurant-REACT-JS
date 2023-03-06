import { restaurantsInterface } from "../interfaces/restaurantsInterface";

export const useMostReviewedRestaurants = (
  restaurants: restaurantsInterface[],
) => {
  const mostReviewedRestaurants = [...restaurants]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 10);
  return mostReviewedRestaurants;
};
