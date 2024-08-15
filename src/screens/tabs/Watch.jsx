import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/tabs/Watch/Header";
import api from "../../utils/api";
import api_key from "../../utils/constants/apiKey";
import MainCard from "../../components/tabs/Watch/MainCard";
import SmallCard from "../../components/tabs/Watch/SmallCard";
import { horizontalScale } from "../../utils/metrices";

const Watch = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadMoviesData = async () => {
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

  const handleOnSearchClick = useCallback(() => {
    setIsSearchVisible(!isSearchVisible);
  }, [isSearchVisible]);

  useEffect(() => {
    loadMoviesData();
  }, []);

  return (
    <View style={styles.container}>
      <Header onClick={handleOnSearchClick} isSearchVisible={isSearchVisible} />
      {!isSearchVisible && (
        <FlatList
          refreshing={loading}
          onRefresh={loadMoviesData}
          showsVerticalScrollIndicator={false}
          data={moviesList}
          keyExtractor={(item, index) => index + ""}
          renderItem={({ item, index }) => <MainCard data={item} />}
          ListHeaderComponent={() => <View style={{ height: 30 }} />}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
        />
      )}

      {isSearchVisible && (
        <View
          style={{
            paddingHorizontal: horizontalScale(20),
          }}
        >
          <FlatList
            refreshing={loading}
            onRefresh={loadMoviesData}
            showsVerticalScrollIndicator={false}
            data={moviesList}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            keyExtractor={(item, index) => index + ""}
            renderItem={({ item, index }) => <SmallCard data={item} />}
            ListHeaderComponent={() => <View style={{ height: 30 }} />}
            ListFooterComponent={() => <View style={{ height: 190 }} />}
          />
        </View>
      )}
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
  columnWrapper: {
    justifyContent: "space-between",
  },
});
