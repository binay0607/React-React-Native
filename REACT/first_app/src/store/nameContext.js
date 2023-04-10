import { createContext, useState } from "react";

export const NameContext = createContext({
  name: "",
  changeName: (newName) => {},
});

const NameContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  function changeName(newName) {
    setName(newName);
  }
  const value = {
    name: name,
    changeName: changeName,
  };
  return <NameContext.Provider>{children}</NameContext.Provider>;
};

export default NameContextProvider;
