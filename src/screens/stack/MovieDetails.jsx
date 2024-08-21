import { StyleSheet, Text, View } from "react-native";
import React from "react";
import api from "../../utils/api";
import api_key from "../../utils/constants/apiKey";

const MovieDetails = (props) => {

     const loadMovieDe = async () => {
       setLoading(true);
       try {
         const { data } = await api.get(`upcoming?api_key=${api_key}`);

         setMoviesList(data?.results);
         setLoading(false);
       } catch (error) {
         console.log(error);
         setLoading(false);
       }
     };

  return (
    <View style={styles.container}>
      <View style={styles.hero}></View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
