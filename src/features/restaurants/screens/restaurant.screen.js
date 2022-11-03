import React, { useContext } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { MainSafeAreaView } from "../components/utils/safearea.component.js";
import styled from "styled-components";

import { RestaurantInfo } from "../components/restaurant.card.component.js";
import { theme } from "../../../infrastrcture/theme/index.js";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context.js";

const SearchBarContainer = styled(Searchbar)`
  background-color: ${theme.colors.bg.primary};
  padding: 16px;
`;

export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  console.log(restaurantContext);
  return (
    <>
      <MainSafeAreaView>
        <SearchBarContainer placeholder="ASS" />
        <FlatList
          data={restaurantContext.restaurants}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </MainSafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};
