import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeArea } from "../components/safeArea";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <SafeArea>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="absolute top-16 left-8 bg-transparent z-50 rounded-full shadow-lg "
      >
        <Icon name="home" color="grey"></Icon>
      </TouchableOpacity>

      <View className="h-1/2">
        <Map />
      </View>

      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </SafeArea>
  );
};

export default MapScreen;
