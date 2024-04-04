import { FC, createContext, useState } from "react";
import { Ichildren } from "../types/interface";

export const MyContext = createContext<any>(null);

const Context: FC<Ichildren> = ({ children }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ hamburgerMenu, setHamburgerMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
