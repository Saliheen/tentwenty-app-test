import { StyleSheet, Text, View } from "react-native";
import React from "react";

const More = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBDBDF",
    padding: 20,
  },
  title: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 36,
    color: "#333",
    marginBottom: 10,
  },
});
