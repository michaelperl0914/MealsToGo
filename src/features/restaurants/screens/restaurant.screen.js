import React from "react";
import { View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

import { RestaurantInfo } from "../components/restaurant.card.component.js";
import { theme } from "../../../infrastrcture/theme/index.js";

const RestaurantViewContainer = styled(View)`
  background-color: ${theme.colors.bg.secondary};
  padding: 16px;
  flex: 1;
`;

const SearchBarContainer = styled(Searchbar)`
  background-color: ${theme.colors.bg.primary};
  padding: 16px;
`;

const MainSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.bg.secondary};
`;

export const RestaurantScreen = () => {
  return (
    <>
      <MainSafeAreaView>
        <SearchBarContainer placeholder="ASS" />
        <RestaurantViewContainer>
          <RestaurantInfo />
        </RestaurantViewContainer>
      </MainSafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};
