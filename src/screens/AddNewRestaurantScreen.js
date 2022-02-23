import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AddNewRestaurantScreen() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [newRestaurant, setNewRestaurant] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    if (
      newRestaurant.address &&
      newRestaurant.name &&
      newRestaurant.photo &&
      newRestaurant.rating
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [newRestaurant]);

  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, name: text })
          }
        />
        <Input
          placeholder="Address"
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, address: text })
          }
        />
        <Input
          placeholder="Photo"
          keyboardType="url"
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, photo: text })
          }
        />
        <Input
          placeholder="Rating"
          keyboardType="numeric"
          maxLength="1"
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, rating: text })
          }
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
