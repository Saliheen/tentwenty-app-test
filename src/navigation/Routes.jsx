import Dashboard from "../screens/tabs/Dashboard";
import Watch from "../screens/tabs/Watch";
import MediaLibrary from "../screens/tabs/MediaLibrary";
import More from "../screens/tabs/More";

import { Onyx } from "../utils/constants/colors";

import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../utils/metrices";

import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const NormalStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const NormalStackScreens = () => {
  return (
    <NormalStack.Navigator>
      {/* <NormalStack.Screen
        name="AddStock"
        component={AddStock}
        options={{ headerShown: false }}
      /> */}
    </NormalStack.Navigator>
  );
};

const TabStackScreens = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Watch"
      screenOptions={{
        tabBarShowLabel: false,
        headerShadowVisible: true,
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      }}
    >
      <TabStack.Screen
        name="Dashaboard"
        component={Dashboard}
        options={{
          title: "Dashbaord",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ ...styles.column, opacity: focused ? 1 : 0.5 }}>
                <Entypo name="grid" size={30} color="white" />
                <Text
                  style={{
                    ...styles.tabBarTitle,
                    fontFamily: focused ? "Roboto_Bold" : "Roboto_Regular",
                  }}
                >
                  Dashboard
                </Text>
              </View>
            );
          },
        }}
      />
      <TabStack.Screen
        name="Watch"
        component={Watch}
        options={{
          title: "Watch",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ ...styles.column, opacity: focused ? 1 : 0.5 }}>
                <MaterialCommunityIcons
                  name="youtube"
                  size={30}
                  color="white"
                />
                <Text
                  style={{
                    ...styles.tabBarTitle,
                    fontFamily: focused ? "Roboto_Bold" : "Roboto_Regular",
                  }}
                >
                  Watch
                </Text>
              </View>
            );
          },
        }}
      />
      <TabStack.Screen
        name="MediaLibrary"
        component={MediaLibrary}
        options={{
          title: "MediaLibrary",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ ...styles.column, opacity: focused ? 1 : 0.5 }}>
                <MaterialIcons name="library-books" size={30} color="white" />
                <Text
                  style={{
                    ...styles.tabBarTitle,
                    fontFamily: focused ? "Roboto_Bold" : "Roboto_Regular",
                  }}
                >
                  Media Library
                </Text>
              </View>
            );
          },
        }}
      />
      <TabStack.Screen
        name="More"
        component={More}
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={{ ...styles.column, opacity: focused ? 1 : 0.5 }}>
                <Foundation name="indent-more" size={30} color="white" />
                <Text
                  style={{
                    ...styles.tabBarTitle,
                    fontFamily: focused ? "Roboto_Bold" : "Roboto_Regular",
                  }}
                >
                  More
                </Text>
              </View>
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Tabs"
            component={TabStackScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NormalStack"
            component={NormalStackScreens}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  updateModalWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
  },
  updateModalContainer: {
    backgroundColor: "white",
    marginBottom: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tabBarStyle: {
    position: "absolute",
    left: horizontalScale(0),
    right: horizontalScale(0),
    bottom: verticalScale(-2),
    borderTopEndRadius: moderateScale(27),
    borderTopStartRadius: moderateScale(27),
    backgroundColor: Onyx,
    height: verticalScale(75),
    elevation: 3,
    borderWidth: moderateScale(1),
  },
  tabBarTitle: {
    fontSize: moderateScale(10),
    textAlign: "center",
    color: "white",
  },
});

export default Routes;
