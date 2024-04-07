import { FC, createContext, useState } from "react";
import { Ichildren } from "../types/interface";

export const MyContext = createContext<any>(null);

const Context: FC<Ichildren> = ({ children }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

  const [ordersOnline, setOrdersOnline] = useState<boolean>(true);

  const [ordersOfice, setOrdersOfice] = useState<boolean>(false);

  const [openRegister, setOpenregister] = useState<boolean>(false);

  const [modalLogin, setModalLogin] = useState<boolean>(false);

  return (
    <MyContext.Provider
      value={{
        hamburgerMenu,
        setHamburgerMenu,
        ordersOnline,
        setOrdersOnline,
        ordersOfice,
        setOrdersOfice,
        openRegister,
        setOpenregister,
        modalLogin,
        setModalLogin,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
