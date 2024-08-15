import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/metrices";
import IMAGE_BASE_URL from "../../../utils/constants/imageBaseUrl";
import { LinearGradient } from "expo-linear-gradient";

import Animated, { FadeOut, FlipInEasyX } from "react-native-reanimated";

const SmallCard = ({ data }) => {
  return (
    <Animated.View
      entering={FlipInEasyX}
      exiting={FadeOut}
      style={styles.container}
    >
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${data?.backdrop_path}`,
        }}
        style={{
          height: verticalScale(110),
          width: horizontalScale(163),
        }}
      />
      <LinearGradient
        colors={["black", "transparent"]}
        style={styles.gradient}
        start={{ x: 0, y: 1.4 }}
        end={{ x: 0, y: 0 }}
      ></LinearGradient>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data?.title}</Text>
      </View>
    </Animated.View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(110),
    width: horizontalScale(163),
    marginBottom: verticalScale(20),

    borderRadius: moderateScale(10),
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 1,
    position: "relative",
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleContainer: {
    position: "absolute",
    bottom: verticalScale(20),
    left: horizontalScale(10),
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Poppins_Medium",
    fontSize: moderateScale(16),
    includeFontPadding: false,
  },
});
