import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Card = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity
      className={"bg-green-400 p-4 mr-4 rounded-lg shadow-md"}
      onPress={onPress}
    >
      <View className="flex flex-row">
        {/* Assuming `icon` is the icon component */}
        {icon}

        <Text className="text-center font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
