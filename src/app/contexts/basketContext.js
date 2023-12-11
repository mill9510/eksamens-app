"use client";
import { createContext, useState } from "react";

export const BasketValueContext = createContext();
export const BasketUpdaterContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  return (
    <BasketValueContext.Provider value={basket}>
      <BasketUpdaterContext.Provider value={setBasket}>{children}</BasketUpdaterContext.Provider>
    </BasketValueContext.Provider>
  );
};
