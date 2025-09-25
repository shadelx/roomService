import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

const CartScreen: React.FC = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();

  const { cartItems, increaseQuantity, decreaseQuantity, totalPrice } =
    useCart();

  const renderItem = ({ item }: any) => (
    <View className="flex-row items-center bg-gray-800 rounded-xl m-2 p-2 shadow-lg">
      <Image
        source={{ uri: item.image }}
        className="w-20 h-20 rounded-lg mr-3"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-white font-semibold">{item.name}</Text>
        <Text className="text-gray-400">${item.price}</Text>
        <View className="flex-row mt-2 items-center">
          <TouchableOpacity
            className="bg-gray-600 px-3 py-1 rounded-l"
            onPress={() => decreaseQuantity(item.id)}
          >
            <Text className="text-white text-lg">-</Text>
          </TouchableOpacity>
          <Text className="text-white px-4">{item.quantity}</Text>
          <TouchableOpacity
            className="bg-gray-600 px-3 py-1 rounded-r"
            onPress={() => increaseQuantity(item.id)}
          >
            <Text className="text-white text-lg">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-2xl font-bold text-white mb-4">Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View className="mt-4 bg-gray-900 rounded-xl p-4">
        <Text className="text-white text-lg font-bold mb-2">
          Total: ${totalPrice.toFixed(2)}
        </Text>
        <TouchableOpacity
          className="bg-green-600 rounded-xl p-4"
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text className="text-white font-bold text-center text-lg">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
