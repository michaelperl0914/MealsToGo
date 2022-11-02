import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen.js";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastrcture/theme/index.js";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
