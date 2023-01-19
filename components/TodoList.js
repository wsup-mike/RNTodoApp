import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default TodoList = ({ list }) => {
  return (
    <View>
      <Text>{list.name}</Text>
    </View>
  );
};
