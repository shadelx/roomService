import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../App';
import { useCart } from '../context/CartContext';
import Sidebar from '../components/Sidebar';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

type Props = { route: ProductDetailsRouteProp };

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View className="flex-1 flex-row bg-black">
      <Sidebar
        categories={['All', 'TVs', 'Laptops', 'Phones', 'Accessories']}
      />

      <ScrollView className="flex-1 p-6">
        <View className="bg-gray-900 rounded-sm shadow-lg p-6">
          <Image
            source={{ uri: product.image }}
            className="w-full h-64 rounded-sm mb-4"
            resizeMode="cover"
          />
          <Text className="text-white text-3xl font-bold mb-2">
            {product.name}
          </Text>
          <Text className="text-indigo-500 text-2xl font-semibold mb-4">
            ${product.price}
          </Text>
          <Text className="text-gray-300 text-lg mb-6">
            {product.description}
          </Text>

          <TouchableOpacity
            className="bg-indigo-600 rounded-sm py-4 shadow-md mb-4"
            onPress={() => addToCart(product)}
          >
            <Text className="text-white font-bold text-center text-lg">
              Add to Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-indigo-600 rounded-sm py-4 shadow-md"
            onPress={() => {}}
          >
            <Text className="text-white font-bold text-center text-lg">
              Go to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
