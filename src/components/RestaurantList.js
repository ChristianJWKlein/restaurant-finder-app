import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

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

  return (
    <View>
      <Text>Restaurants</Text>
      {!restaurants ? (
        <Text>Loading...</Text>
      ) : (
        restaurants.map((restaurant) => {
          return <Text> {restaurant.name} </Text>;
        })
      )}
    </View>
  );
}

export default RestaurantList;
