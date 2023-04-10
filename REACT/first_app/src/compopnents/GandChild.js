import React, {useContext} from "react";
import { NameContext } from "../store/nameContext";
const GrandChild = () => {
  const name = useContext(NameContext).name;
  return <div>{name}</div>;
};

export default GrandChild;
