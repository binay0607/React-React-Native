import React, { useContext } from "react";
import { NameContext } from "../store/nameContext";
const GrandChild = () => {
  const name = useContext(NameContext).name;
  return <div>I am inside GrandChild{name}</div>;
};

export default GrandChild;
