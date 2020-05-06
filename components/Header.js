import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>This is Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#990000",
    height: 80,
    paddingTop: 38,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
