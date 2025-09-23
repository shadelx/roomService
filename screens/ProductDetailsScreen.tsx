import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

type RouteParams = {
  ProductDetails: { product: Product };
};

const ProductDetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, 'ProductDetails'>>();
  const { product } = route.params;

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        className="w-full h-64"
        resizeMode="cover"
      />

      {/* Product Info */}
      <View className="p-4">
        <Text className="text-2xl font-bold text-white mb-2">
          {product.name}
        </Text>
        <Text className="text-xl text-green-400 font-semibold mb-4">
          {product.price}
        </Text>
        <Text className="text-base text-gray-300 leading-relaxed mb-6">
          {product.description ||
            'This is a premium television with cutting-edge technology, vibrant colors, and stunning clarity. Perfect for movies, sports, and gaming.'}
        </Text>

        {/* Buy Button */}
        <TouchableOpacity className="bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-xl p-4">
          <Text className="text-center text-white text-lg font-bold">
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
