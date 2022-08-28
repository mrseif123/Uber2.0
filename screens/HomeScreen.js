import { View, Text, Image } from "react-native";
import React from "react";
import { SafeArea } from "../components/safeArea";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeArea className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
      <GooglePlacesAutocomplete
        styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en",
        }}
        minLength={2}
        fetchDetails={true}
        enablePoweredByContainer={false}
        returnKeyType={"search"}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
      />
      <NavOptions />
    </SafeArea>
  );
};

export default HomeScreen;
