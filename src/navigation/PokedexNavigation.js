import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: "Pokedex",
        }}
      />

      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "Pokemon",
        }}
      />
    </Stack.Navigator>
  );
}
