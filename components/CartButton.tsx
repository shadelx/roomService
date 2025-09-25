import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

const CartButton = ({ navigation }: { navigation: any }) => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      className="px-3 py-1 bg-green-600 rounded-lg relative"
    >
      <Text className="text-white font-bold">Cart</Text>
      {totalCount > 0 && (
        <View className="absolute -top-2 -right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
          <Text className="text-white text-xs font-bold">{totalCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default CartButton;
