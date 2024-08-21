import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import IMAGE_BASE_URL from "../../../utils/constants/imageBaseUrl";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/metrices";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const genreMapping = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const SearchItem = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("NormalStack", { screen: "MovieDetails" });
      }}
    >
      <View>
        <Image
          source={{
            uri: `${IMAGE_BASE_URL}${data?.backdrop_path}`,
          }}
          style={{
            height: verticalScale(100),
            width: horizontalScale(130),
            borderRadius: moderateScale(10),
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.genere}>{genreMapping[data?.genre_ids[0]]}</Text>
      </View>
      <View>
        <Entypo name="dots-three-horizontal" size={24} color="#61C3F2" />
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  infoContainer: {
    flex: 1,
    marginLeft: horizontalScale(21),
  },
  title: {
    color: "#202C43",
    fontFamily: "Poppins_Medium",
    includeFontPadding: false,
    fontSize: moderateScale(16),
  },
  genere: {
    color: "#DBDBDF",
    fontFamily: "Poppins_Medium",
    includeFontPadding: false,
    fontSize: moderateScale(12),
    marginTop: verticalScale(6),
  },
});
