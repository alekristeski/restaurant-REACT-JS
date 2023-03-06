import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { restaurantsInterface } from "../interfaces/restaurantsInterface";
import { useHandleRandomDetailPage } from "./useHandleRandomDetailPage";
import { useMostReviewedRestaurants } from "./useMostReviewedRestaurants";
import { useSetTypeCuisine } from "./useSetTypeCuisine";
import { useUniqueType } from "./useUniqueType";

interface ContextData {
  restaurants: restaurantsInterface[];
  faveRestaurants: restaurantsInterface | undefined;
  allFaveRestaurants: restaurantsInterface[];
  mostReviewedRestaurants: restaurantsInterface[];
  uniqueType: string[];
  typeCuisine: restaurantsInterface[];
  currentLocation: string;
  handleRandomDetailPage: () => void;
  handleFilterResByType: (type: string) => void;
  handleFavoriteRestaurants: (id: string) => void;
  enteredName: string;
  nameChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enteredComment: string;
  commentChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enteredStar: string;
  starChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Context = createContext({} as ContextData);

interface Props {
  children: React.ReactNode;
  initialRestaurants: restaurantsInterface[];
}

export const Provider: React.FC<Props> = ({ children, initialRestaurants }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [faveRestaurants, setFaveRestaurants] = useState<
    restaurantsInterface | any
  >();
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredComment, setEnteredComment] = useState<string>("");
  const [enteredStar, setEnteredStar] = useState<string>("");

  const mostReviewedRestaurants = useMostReviewedRestaurants(restaurants);
  const handleRandomDetailPage = useHandleRandomDetailPage(
    restaurants,
    navigate,
  );
  const uniqueType = useUniqueType(restaurants);

  const handleFilterResByType = (type: string) => {
    navigate(`/cuisine/${type}`);
  };

  const currentLocation = location.pathname.split("/")[2];
  const typeCuisine = useSetTypeCuisine(restaurants, currentLocation);

  const handleFavoriteRestaurants = (id: string) => {
    const findID = restaurants.find((resID) => resID.id === id);

    fetch(`http://localhost:5001/restaurants/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ isFavorite: !findID?.isFavorite }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFaveRestaurants(data);
      });
  };

  const allFaveRestaurants = restaurants.filter((faveRes) => {
    return faveRes.isFavorite;
  });

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };
  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredComment(e.target.value);
  };
  const starChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredStar(e.target.value);
  };

  const onSubmitLocation = location.pathname.split("/")[1];
  const findRestaurantID = restaurants.find(
    (resID) => resID.id === onSubmitLocation,
  );

  useEffect(() => {
    if (findRestaurantID?.id === onSubmitLocation) {
      fetch(`http://localhost:5001/restaurants/${onSubmitLocation}`)
        .then((res) => res.json())
        .then((resData) => {
          setFaveRestaurants(resData);
        });
    }
  }, [findRestaurantID?.id, onSubmitLocation]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredName.trim() && enteredComment.trim() && enteredStar.trim()) {
      const reviewsListData = {
        id: new Date().valueOf(),
        author: enteredName,
        comment: enteredComment,
        stars: enteredStar,
      };

      const findreviewsList: restaurantsInterface | undefined =
        restaurants.find((resID) => resID.id === onSubmitLocation);
      findreviewsList &&
        fetch(`http://localhost:5001/restaurants/${onSubmitLocation}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            reviewsList: [...findreviewsList?.reviewsList, reviewsListData],
            reviews:
              faveRestaurants?.reviewsList.length === 0
                ? 1
                : faveRestaurants?.reviewsList?.length + 1,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setFaveRestaurants(data);
          });
    }
    setEnteredName("");
    setEnteredComment("");
    setEnteredStar("");
  };
  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((resData) => {
        setRestaurants(resData);
      });
  }, [faveRestaurants]);

  const contextObj: ContextData = {
    restaurants,
    allFaveRestaurants,
    faveRestaurants,
    mostReviewedRestaurants,
    uniqueType,
    typeCuisine,
    currentLocation,
    handleRandomDetailPage,
    handleFilterResByType,
    handleFavoriteRestaurants,
    enteredName,
    nameChangeHandler,
    enteredComment,
    commentChangeHandler,
    enteredStar,
    starChangeHandler,
    handleOnSubmit,
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
