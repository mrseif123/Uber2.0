import { Image, View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-64">
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="font-semibold mt-2 text-lg ">{item.title}</Text>
            <Icon
              className="p-2 bg-black rounded-full w-10 mt-4"
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
