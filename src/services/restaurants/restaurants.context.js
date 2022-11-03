import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantTransfrom } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvidor = ({ children }) => {
  return (
    <RestaurantContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6],
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
