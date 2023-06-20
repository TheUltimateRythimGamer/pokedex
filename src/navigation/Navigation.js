import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Icon from "@expo/vector-icons/FontAwesome5";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "Pokedex",
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 65,
        height: 65,
        top: -20,
      }}
    />
  );
}
