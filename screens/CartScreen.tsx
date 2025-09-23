import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
  {
    id: '1',
    name: 'Samsung QLED TV',
    price: '1200',
    quantity: 1,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'LG OLED TV',
    price: '1500',
    quantity: 2,
    image: 'https://via.placeholder.com/150',
  },
];

const CartScreen: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const renderItem = ({ item }: { item: CartItem }) => (
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
        <TouchableOpacity className="bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-xl p-4">
          <Text className="text-white font-bold text-center text-lg">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
