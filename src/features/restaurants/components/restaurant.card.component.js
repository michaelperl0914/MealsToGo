import React from "react";
import { Text } from "react-native-paper";
import styled from "styled-components";

import { Card } from "react-native-paper";
import { theme } from "../../../infrastrcture/theme";

const RestaurantCard = styled(Card)`
  background-color: ${theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${theme.space[3]};
  color: red;
`;

const Title = styled(Text)`
  padding: 16px;
  color: ${theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Jack Browns",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemp = false,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
