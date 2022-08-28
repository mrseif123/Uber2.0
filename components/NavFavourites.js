import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Streetm, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            name={item.icon}
            type="ionicon"
            color="white"
            className="rounded-full bg-gray-300 p-3 mr-4"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
