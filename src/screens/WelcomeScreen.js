import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { routesProvider } from "../utils/provider";

const WelcomeScreen = () => {
    const router = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-purple-600">
      <View className="flex flex-1 justify-around my-4 items-center">
        <Text className="text-white font-bold text-4xl text-center">Let's Get Started!</Text>

        <View className="flex flex-row justify-center">
            <Image source={require("../../assets/icon.png")} style={{width:350, height:350}} />
        </View>
        <View className="space-y-4">
            <TouchableOpacity onPress={()=>router.navigate(routesProvider.HOME)} className="py-3 bg-yellow-500 rounded-xl" style={{width:320}}>
                <Text className="text-xl font-bold text-center text-gray-700">Go Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.navigate(routesProvider.SIGN_UP)} className="py-3 bg-yellow-500 rounded-xl" style={{width:320}}>
                <Text className="text-xl font-bold text-center text-gray-700">SignUp</Text>
            </TouchableOpacity>
            <View className="flex-row gap-x-1 items-center justify-center">
                <Text className="text-white italic">Already Have an Account?</Text>
                <TouchableOpacity onPress={()=>router.navigate(routesProvider.SIGN_IN)}>
                <Text className=" text-white font-semibold ">Login</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
