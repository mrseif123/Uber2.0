import { View, Text, Image } from "react-native";
import React from "react";
import { SafeArea } from "../components/safeArea";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeArea className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
      <NavOptions />
    </SafeArea>
  );
};

export default HomeScreen;
