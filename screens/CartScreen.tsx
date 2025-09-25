import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useNavigation } from '@react-navigation/native';

const CartScreen: React.FC = () => {
  const { cartItems, totalPrice } = useCart();
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-black p-4">
      <Text className="text-3xl font-bold text-white mb-6">Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View className="mt-6 bg-gray-900 rounded-sm p-6 shadow-lg">
        <Text className="text-white text-2xl font-bold mb-4">
          Total: ${totalPrice.toFixed(2)}
        </Text>
        <TouchableOpacity
          className="bg-indigo-600 rounded-sm py-4 shadow-md"
          onPress={() => navigation.navigate('Checkout' as never)}
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
