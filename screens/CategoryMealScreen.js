import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category meal Screen</Text>
      <Button
        title="go to Detail"
        onPress={() => props.navigation.navigate("MealDetail")}
      />

      <Button title="go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
