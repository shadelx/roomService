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
      className="bg-gray-800 rounded-xl m-2 p-2 flex-1"
      onPress={() => navigation.navigate('ProductDetails', { product })}
    >
      <Image
        source={{ uri: product.image }}
        className="w-full h-32 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-white font-bold">{product.name}</Text>
      <Text className="text-gray-400">${product.price}</Text>
      <TouchableOpacity
        className="bg-green-600 rounded-lg p-2 mt-2"
        onPress={() => addToCart(product)}
      >
        <Text className="text-white text-center font-bold">Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
