import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

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
