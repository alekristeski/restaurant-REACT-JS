import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
import Button from "../../atoms/Button/Button";
import Form from "../../atoms/Form/Form";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Title from "../../atoms/Title/Title";

const ReviewForm = () => {
  const {
    enteredName,
    nameChangeHandler,
    enteredComment,
    commentChangeHandler,
    enteredStar,
    starChangeHandler,
  } = useContext(Context);

  return (
    <Form>
      <Title title="review form" />
      <Label labelName="name" name="Name" />
      <Input
        inputName="name"
        value={enteredName}
        type="text"
        handleOnChange={nameChangeHandler}
      />
      <Label labelName="comment" name="Comment" />
      <Input
        inputName="comment"
        value={enteredComment}
        type="text"
        handleOnChange={commentChangeHandler}
      />
      <Label labelName="star" name="Star" />
      <Input
        inputName="star"
        value={enteredStar}
        type="range"
        handleOnChange={starChangeHandler}
      />
      <Button text="Leave a review" />
    </Form>
  );
};

export default ReviewForm;
