import { restaurantsInterface } from "../interfaces/restaurantsInterface";

export const useUniqueType = (restaurants: restaurantsInterface[]) => {
  const uniqueType: string[] = [];
  restaurants.filter((type) => {
    const isDuplicate = uniqueType.includes(type.restauranttype);
    if (!isDuplicate) {
      uniqueType.push(type.restauranttype);
      return true;
    }
    return false;
  });
  return uniqueType;
};
