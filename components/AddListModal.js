import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";

export default class AddListModal extends React.Component {
  backgroundColors = [
    "#24A6D9",
    "#8022D9",
    "#03c03c",
    "#04ffd4",
    "#ff27c7",
    "#67001a",
  ];

  state = {
    name: "",
    color: this.backgroundColors[0],
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={30} color={colors.black} />
        </TouchableOpacity>

        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text style={styles.title}>Create Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name"
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
          >
            <Text style={{ color: colors.white, fontWeight: "600" }}>
              Create list
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },

  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },

  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
