import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/metrices";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch</Text>
      <TouchableOpacity
        style={{
          paddingBottom: verticalScale(24),
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: verticalScale(111),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    elevation: 1,
    paddingHorizontal: horizontalScale(21),
  },
  title: {
    paddingBottom: verticalScale(24),
    color: "#202C43",
    fontSize: moderateScale(16),
    fontFamily: "Poppins_Medium",
  },
});
