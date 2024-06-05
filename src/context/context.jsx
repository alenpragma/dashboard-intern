import { createContext, useState } from 'react';

export const StoreContext = createContext();


const StoreContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StoreContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
