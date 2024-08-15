import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { memo } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/metrices";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const Header = ({ onClick, isSearchVisible }) => {
  return (
    <View style={styles.container}>
      {!isSearchVisible ? (
        <View style={styles.row}>
          <Text style={styles.title}>Watch</Text>
          <TouchableOpacity
            style={{
              paddingBottom: verticalScale(24),
            }}
            onPress={onClick}
          >
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.searchContainer}
        >
          <TextInput
            style={styles.textInput}
            placeholder="TV shows, movies and more"
          />
          <View style={styles.searchIcon} pointerEvents="none">
            <Feather name="search" size={24} color="black" />
          </View>
          <TouchableOpacity style={styles.searchCloseIcon} onPress={onClick}>
            <EvilIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: verticalScale(111),
    paddingHorizontal: horizontalScale(21),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    paddingBottom: verticalScale(24),
    color: "#202C43",
    fontSize: moderateScale(16),
    fontFamily: "Poppins_Medium",
  },
  searchContainer: {
    height: verticalScale(52),
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    marginBottom: verticalScale(10),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(30),
    elevation: 0.5,
  },
  textInput: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: horizontalScale(48),
  },
  searchIcon: {
    position: "absolute",
    left: horizontalScale(18),
  },
  searchCloseIcon: {
    position: "absolute",
    right: horizontalScale(18),
  },
});
