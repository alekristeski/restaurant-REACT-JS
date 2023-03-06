import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
import BorderBottom from "../../atoms/BorderBottom/BorderBottom";
import Button from "../../atoms/Button/Button";

const SupriseMeBtn = () => {
  const { handleRandomDetailPage } = useContext(Context);

  return (
    <>
      <div onClick={handleRandomDetailPage}>
        <Button text=" Suprise me!" />
      </div>
      <BorderBottom />
    </>
  );
};

export default SupriseMeBtn;
