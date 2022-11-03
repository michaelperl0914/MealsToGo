import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native";
import { theme } from "../../../../infrastrcture/theme";

export const MainSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.bg.secondary};
`;
