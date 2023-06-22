import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

export default function PokemonList(props) {
  const { pokemons } = props;
  console.log(pokemons);

  const renderItem = ({ item }) => <Text>{item.name}</Text>;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
