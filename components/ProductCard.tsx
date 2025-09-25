import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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

  return (
    <TouchableOpacity
      className="bg-gray-800 m-2 p-4 rounded-sm shadow-lg flex-1 transform hover:scale-105"
      onPress={() => navigation.navigate('ProductDetails', { product })}
    >
      <Image
        source={{ uri: product.image }}
        className="w-full h-40 rounded-sm mb-3"
        resizeMode="cover"
      />
      <Text className="text-white font-bold text-lg mb-1">{product.name}</Text>
      <Text className="text-gray-400 mb-3">${product.price}</Text>
      <TouchableOpacity
        className="bg-indigo-600 rounded-sm py-2 shadow-md"
        onPress={() => addToCart(product)}
      >
        <Text className="text-white font-bold text-center">Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
