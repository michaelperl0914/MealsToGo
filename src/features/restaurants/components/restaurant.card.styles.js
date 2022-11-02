import styled from "styled-components";
import { Card } from "react-native-paper";
import { theme } from "../../../infrastrcture/theme";
import { Text } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${theme.space[3]};
  color: red;
`;

export const Title = styled(Text)`
  padding: ${theme.space[1]};
  color: ${theme.colors.ui.primary};
`;

export const StarView = styled.View`
  flex-direction: row;
`;

export const IsOpenView = styled.View`
  position: absolute;
  right: 0;
`;

export const IconView = styled.View`
  flex-direction: row;
`;

export const Address = styled(Text)`
  padding: ${theme.space[1]};
  color: ${theme.colors.ui.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.caption}l;
`;
