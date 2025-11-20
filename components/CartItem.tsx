import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

const CartItem: React.FC<{
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}> = ({ id, name, price, quantity, image }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <View className="flex-row items-center bg-gray-800 rounded-sm m-2 p-2 shadow-lg">
      <Image
        source={{ uri: image }}
        className="w-20 h-20 rounded-sm mr-3"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-white font-semibold">{name}</Text>
        <Text className="text-gray-400">${price}</Text>
        <View className="flex-row mt-2 items-center">
          <TouchableOpacity
            className="bg-gray-600 px-3 py-1 rounded-l"
            onPress={() => decreaseQuantity(id)}
          >
            <Text className="text-white text-lg">-</Text>
          </TouchableOpacity>
          <Text className="text-white px-4">{quantity}</Text>
          <TouchableOpacity
            className="bg-gray-600 px-3 py-1 rounded-r"
            onPress={() => increaseQuantity(id)}
          >
            <Text className="text-white text-lg">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
