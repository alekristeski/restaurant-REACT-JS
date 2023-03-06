import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./_restaurantDetailPage.module.scss";
import useFetch from "../../hook/useFetch";
import { ListInterface } from "../../interfaces/restaurantsInterface";
import { calcAvgReviewList } from "../../../src/components/templates/AllRestaurants/utils";
import ReviewForm from "../../components/organisms/ReviewForm/ReviewForm";
import { Context } from "../../context/restaurantsContext";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurants } = useContext(Context);
  const findRestaurantID = restaurants.find((resID) => resID.id === id);
  if (!findRestaurantID) {
    navigate(`*`);
  }
  const { dataObj, status } = useFetch(
    `http://localhost:5001/restaurants/${id}`,
  );
  let avgRating;
  if (dataObj) {
    avgRating = calcAvgReviewList(dataObj?.reviewsList);
    avgRating as string | number;
  }

  return (
    <>
      <div>
        {status === "pending" && <p>Loading</p>}
        {dataObj && (
          <div>
            <h1 className={styles.text_align_uppercase}>
              {dataObj.businessname}
            </h1>
            <div className={styles.card}>
              <img src={dataObj.image} alt={dataObj.businessname} />
              <p>{avgRating}</p>
              <p>{`based on ${dataObj.reviews} reviews`}</p>{" "}
              <p>{dataObj.phone}</p>
              <p>{dataObj.email}</p>
              <p>{dataObj.address}</p>
              {dataObj.parkinglot ? (
                <p>we have parking lot waiting for you</p>
              ) : (
                <p> Unfortunately we do not have parking lot</p>
              )}
            </div>
            <h2 className={styles.text_align_uppercase}>
              {avgRating === "no rating given" ? "No reviews" : "Reviews"}
            </h2>
            <div>
              {dataObj.reviewsList.map((list: ListInterface) => {
                return (
                  <ul key={list.id} className={styles.review_list}>
                    <li>
                      <p>Author:</p>
                      <span>{list.author}</span>
                    </li>
                    <li>
                      <p>Message:</p>
                      <span>{list.comment}</span>
                    </li>
                    <li>
                      <p>Stars:</p>
                      <span>{list.stars}</span>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <ReviewForm />
    </>
  );
};

export default RestaurantDetail;
