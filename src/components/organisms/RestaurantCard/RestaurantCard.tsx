import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { restaurantsInterface } from "../../../interfaces/restaurantsInterface";
import { calcAvgReviewList } from "../../templates/AllRestaurants/utils";
import styles from "./_restaurantCard.module.scss";
interface restaurantProps {
  restaurant: restaurantsInterface;
}
const RestaurantCard = ({ restaurant }: restaurantProps) => {
  const { handleFavoriteRestaurants } = useContext(Context);
  const { reviewsList } = restaurant;
  const avgRating = calcAvgReviewList(reviewsList);

  const isFaveIcon = restaurant.isFavorite ? (
    <i className="fas fa-heart"></i>
  ) : (
    <i className="far fa-heart"></i>
  );

  return (
    <article className={styles.card}>
      <div
        onClick={() => {
          handleFavoriteRestaurants(restaurant.id);
        }}
      >
        {isFaveIcon}
      </div>
      <Link to={`/${restaurant.id}`}>
        <figure className={styles.card_image}>
          <LazyLoadImage src={restaurant.image} alt={restaurant.slug} />
        </figure>
      </Link>
      <div className={styles.card_content}>
        <header className={styles.card_header}>
          <h2>{restaurant.businessname}</h2>
          <h4>{restaurant.restauranttype}</h4>
          <p>{`rating: ${avgRating},`}</p>
          <p>{`based on ${restaurant.reviews} reviews`}</p>
        </header>
      </div>
    </article>
  );
};

export default RestaurantCard;
