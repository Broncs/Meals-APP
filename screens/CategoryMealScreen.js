import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="go to Detail"
        onPress={() => props.navigation.navigate("MealDetail")}
      />

      <Button title="go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  console.log(catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
