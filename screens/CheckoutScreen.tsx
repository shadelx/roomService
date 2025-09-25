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
