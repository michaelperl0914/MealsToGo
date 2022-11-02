import React from "react";
import { SvgXml } from "react-native-svg";

import { Card } from "react-native-paper";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Title,
  RestaurantCard,
  RestaurantCardCover,
  StarView,
  IsOpenView,
  IconView,
  Address,
} from "./restaurant.card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Jack Browns",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemp = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <IconView>
          <IsOpenView>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </IsOpenView>
          <StarView>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </StarView>
        </IconView>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
