import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AddNewRestaurantScreen() {
  const [restaurantName, setRestaurantName] = useState();
  const [address, setAddress] = useState();
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const navigation = useNavigation();

  const newRestaurant = {
    address: address,
    name: restaurantName,
    numRatings: rating,
    photoUrl: photo,
    rating: 4.75,
  };

  useEffect(() => {
    if (
      (newRestaurant.address &&
        newRestaurant.name &&
        newRestaurant.numRatings != undefined) ||
      ""
    ) {
      setButtonDisabled(false);
    }
  }, [newRestaurant]);

  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application.json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => alert("New Restaurant Added"))
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <View>
        <Text>Add a New Restaurant</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(text) => setRestaurantName(text)}
        />
        <Input placeholder="Address" onChangeText={setAddress} />
        <Input placeholder="Photo" keyboardType="url" onChangeText={setPhoto} />
        <Input
          placeholder="Rating"
          keyboardType="numeric"
          maxLength="1"
          onChangeText={setRating}
        />
      </View>
      <Button
        title="Create New Restaurant"
        onPress={sendNewRestaurantInfo}
        disabled={buttonDisabled}
      />
    </>
  );
}
