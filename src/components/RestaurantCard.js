import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function RestaurantCard({ restaurant }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: restaurant.photoUrl }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{restaurant.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "gray",
    marginBottom: 16,
  },
  cardImage: {
    width: 350,
    height: 210,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "600",
    padding: 4,
  },
});
