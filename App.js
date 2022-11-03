import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen.js";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-paper";
import { MainSafeAreaView } from "./src/features/restaurants/components/utils/safearea.component.js";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvidor } from "./src/services/restaurants/restaurants.context.js";
import { theme } from "./src/infrastrcture/theme/index.js";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <MainSafeAreaView>
    <Text> SETTING </Text>
  </MainSafeAreaView>
);
const Map = () => (
  <MainSafeAreaView>
    <Text> Map </Text>
  </MainSafeAreaView>
);
const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvidor>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOption={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvidor>
      </ThemeProvider>
    </>
  );
}
