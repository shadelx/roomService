import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useCart } from '../context/CartContext';
import CheckoutSuccess from '../components/CheckoutSuccess';

const CheckoutScreen: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  if (success) return <CheckoutSuccess />;

  return (
    <View className="flex-1 bg-black p-6 justify-center">
      <View className="bg-gray-900 rounded-sm p-6 shadow-lg">
        <Text className="text-white text-3xl font-bold mb-6">Checkout</Text>
        <Text className="text-white text-lg mb-2">
          You have {cartItems.length} items in your cart.
        </Text>
        <Text className="text-white text-2xl font-bold mb-6">
          Total: ${totalPrice.toFixed(2)}
        </Text>

        <TouchableOpacity
          className="bg-indigo-600 rounded-sm py-4 shadow-md"
          onPress={handleCheckout}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-bold text-center text-lg">
              Confirm & Pay
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
