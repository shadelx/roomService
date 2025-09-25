import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

const CheckoutSuccess: React.FC = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <View className="flex-1 bg-black items-center justify-center p-6">
      <Text className="text-green-500 text-2xl font-bold mb-4">
        🎉 Order Placed Successfully!
      </Text>
      <Text className="text-white text-lg mb-6">
        Thank you for your purchase.
      </Text>

      <TouchableOpacity
        className="bg-blue-600 rounded-xl px-6 py-3"
        onPress={() => navigation.navigate('Home')}
      >
        <Text className="text-white font-bold text-lg">Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutSuccess;
