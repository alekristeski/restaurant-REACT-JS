import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
interface Props {
  children: JSX.Element[];
}
const Form = ({ children }: Props) => {
  const { handleOnSubmit } = useContext(Context);
  return <form onSubmit={handleOnSubmit}>{children}</form>;
};

export default Form;
