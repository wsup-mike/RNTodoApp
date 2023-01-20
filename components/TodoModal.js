import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../Colors";
import { AntDesign } from "@expo/vector-icons";

export default class TodoModal extends React.Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.props.list.todos,
  };

  render() {
    const taskCount = this.state.todos.length;
    const completedCount = this.state.todos.filter(
      (todo = todo.completed)
    ).length;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={[styles.section, styles.header]}>
          <Text style={styles.title}>{this.state.name}</Text>
          <Text style={styles.taskCount}></Text>
        </View>
      </SafeAreaView>
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
