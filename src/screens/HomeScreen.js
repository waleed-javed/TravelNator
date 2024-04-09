import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/cards/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  // Function to handle navigation to a specific screen
  const navigateToScreen = (screenName) => {
    const router = useNavigation();
    router.navigate(screenName);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 flex ">
        {/* Carousel */}
        <View className="bg-gray-200 h-48 flex items-center justify-center">
          {/* Your carousel component goes here */}
          <Text className="text-center text-lg">Carousel</Text>
        </View>

        {/* Row with horizontally scrollable containers */}
        <ScrollView className="m-1 bg-red-400">
          <View className="flex flex-row gap-x-1 m-1">
            <Card
              icon={
                <MaterialCommunityIcons
                  name="tape-measure"
                  size={48}
                  color="black"
                />
              }
              title={"Measure"}
              onPress={() => alert("Pressed")}
            />
            <Card
              icon={
                <MaterialCommunityIcons
                  name="tape-measure"
                  size={48}
                  color="black"
                />
              }
              title={"Measure"}
              onPress={() => alert("Pressed")}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
