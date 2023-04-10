import React, { useContext } from "react";
import GrandChild from "./GandChild";
import { NameContext } from "../store/nameContext";
const Child = () => {
  const name = useContext(NameContext).name;
  return (
    <div>
      <p>I am inside child{name}</p>
      <GrandChild />
    </div>
  );
};

export default Child;
