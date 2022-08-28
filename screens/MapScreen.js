import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/safeArea";
import Map from "../components/Map";
const MapScreen = () => {
  return (
    <SafeArea>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2"></View>
    </SafeArea>
  );
};

export default MapScreen;
