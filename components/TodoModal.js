import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TodoModal extends React.Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.props.list.todos,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>List Modal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
