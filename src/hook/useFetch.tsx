import { useContext, useEffect, useState } from "react";
import { Context } from "../context/restaurantsContext";
import { restaurantsInterface } from "../interfaces/restaurantsInterface";

const useFetch = (url: string) => {
  const { faveRestaurants } = useContext(Context);
  const [data, setData] = useState();
  const [dataObj, setDataObj] = useState<restaurantsInterface>();
  const [status, setStatus] = useState<"pending" | "done" | "error">("pending");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setDataObj(resData);
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setStatus("done");
      });
  }, [url, faveRestaurants]);

  return {
    data,
    dataObj,
    status,
  };
};

export default useFetch;
