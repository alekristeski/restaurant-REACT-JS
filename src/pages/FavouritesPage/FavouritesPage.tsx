import React, { useContext } from "react";
import styles from "./_favouritesPage.module.scss";
import { Context } from "../../context/restaurantsContext";
import Title from "../../components/atoms/Title/Title";
import RestaurantCard from "../../components/organisms/RestaurantCard/RestaurantCard";

const FavouritesPage = () => {
  const { allFaveRestaurants } = useContext(Context);

  return (
    <div>
      <Title title={"your favorite restaurant"} />
      <div className={styles.wrapper}>
        {allFaveRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
