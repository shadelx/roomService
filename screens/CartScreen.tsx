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
      <Text className="text-2xl font-bold text-white mb-4">Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View className="mt-4 bg-gray-900 rounded-xl p-4">
        <Text className="text-white text-lg font-bold mb-2">
          Total: ${totalPrice.toFixed(2)}
        </Text>
        <TouchableOpacity
          className="bg-green-600 rounded-xl p-4"
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
