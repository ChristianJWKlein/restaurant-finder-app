import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((res) => res.json())
      .then(
        (data) => setRestaurants(data)
        //.then(setRestaurants) //same same
      )
      .catch(alert);
  }, []);

  console.log(restaurants);

  const navigation = useNavigation();

  const goToNewRestaurant = () => {
    navigation.navigate("NewRestaurant");
  };

  return (
    <View>
      <Button
        title="Add New Restaurant"
        onPress={goToNewRestaurant}
        buttonStyle={{
          backgroundColor: "navy",
          borderRadius: 19,
        }}
        containerStyle={{
          alignSelf: "center",
          width: 200,
          marginHorizontal: "50%",
          marginVertical: 10,
        }}
      />

      {!restaurants ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default RestaurantList;
