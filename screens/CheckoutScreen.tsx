// screens/CheckoutScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type CheckoutNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

const CheckoutScreen: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigation = useNavigation<CheckoutNavProp>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    setLoading(true);

    // Simulate payment process
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  if (success) {
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
          <Text className="text-white font-bold text-lg">
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black p-6">
      <Text className="text-white text-2xl font-bold mb-6">Checkout</Text>

      <Text className="text-white text-lg mb-4">
        You have {cartItems.length} items in your cart.
      </Text>
      <Text className="text-white text-xl font-bold mb-6">
        Total: ${totalPrice.toFixed(2)}
      </Text>

      <TouchableOpacity
        className="bg-green-600 rounded-xl p-4"
        onPress={handleCheckout}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center text-lg font-bold">
            Confirm & Pay
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
