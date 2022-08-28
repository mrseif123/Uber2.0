import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning!</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          fetchDetails={true}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          returnKeyType="search"
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={styles}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                latitude: details.geometry.location.lat,
                description: data.description,
              })
            );
            navigation.navigate("RideOptions");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});
export default NavigateCard;
