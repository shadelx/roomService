import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import type { RootStackParamList } from '../App';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigation = useNavigation<NavProp>();
  const { addToCart } = useCart();

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.08 : 1,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ProductDetails', { product })}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="m-2 flex-1 max-w-sm shadow-sm"
    >
      <Animated.View
        style={{ transform: [{ scale: scaleAnim }] }}
        className={`bg-gray-800 p-4 rounded-sm shadow-lg ${
          focused ? 'border-2 border-indigo-500' : ''
        }`}
      >
        <Image
          source={{ uri: product.image }}
          className="w-full h-40 rounded-sm mb-3"
          resizeMode="cover"
        />
        <Text className="text-white font-bold text-lg mb-1">
          {product.name}
        </Text>
        <Text className="text-gray-400 mb-3">${product.price}</Text>
        <TouchableOpacity onPress={() => addToCart(product)}>
          <View className="bg-indigo-600 rounded-sm py-2 shadow-md">
            <Text className="text-white font-bold text-center">
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ProductCard;
