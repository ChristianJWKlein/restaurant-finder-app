import React from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function AddNewRestaurantScreen() {
  const newRestaurant = {
    address: "Beracasa Way, Boca Raton, FL 33433",
    name: "Boca Code Kitchen",
    numRatings: 5,
    photoUrl: "https://bocacode.com/assets/images/bc-exterior-2.jpg",
    rating: 4.75,
  };

  const sendNewRestaurantInfo = () => {
    fetch("path", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application.json",
      },
      body: JSON.stringify(newRestaurant),
    });
  };

  return (
    <>
      <View>
        <Text>Add a New Restaurant</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(text) => console.log(text)}
        />
        <Input placeholder="Address" />
        <Input placeholder="Photo" keyboardType="url" />
        <Input placeholder="Rating" keyboardType="numeric" maxLength="1" />
      </View>
      <Button title="Create New Restaurant" onPress={sendNewRestaurantInfo} />
    </>
  );
}
