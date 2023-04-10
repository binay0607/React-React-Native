import React, { useContext } from "react";
import GrandChild from "./GandChild";
import { NameContext } from "../store/nameContext";
const Child = () => {
  const name = useContext(NameContext).name;
  return (
    <div>
      {name}
      <GrandChild />
    </div>
  );
};

export default Child;
