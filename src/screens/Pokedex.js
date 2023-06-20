import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokedex() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
