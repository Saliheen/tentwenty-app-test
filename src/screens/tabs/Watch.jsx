import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/tabs/Watch/Header";
import api from "../../utils/api";
import api_key from "../../utils/constants/apiKey";
import MainCard from "../../components/tabs/Watch/MainCard";

const Watch = () => {
  const [moviesList, setMoviesList] = useState([]);

  const loadMoviesData = async () => {
    try {
      const { data } = await api.get(`upcoming?api_key=${api_key}`);

      setMoviesList(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMoviesData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={moviesList}
        keyExtractor={(item, index) => index + ""}
        renderItem={({ item, index }) => <MainCard data={item} />}
        ListHeaderComponent={() => <View style={{ height: 30 }} />}
        ListFooterComponent={() => <View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Watch;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    display: "flex",
    flexDirection: "column",
  },
});
