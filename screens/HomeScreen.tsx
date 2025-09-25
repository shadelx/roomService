import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import type { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const products = Array.from({ length: 16 }).map((_, i) => ({
  id: String(i + 1),
  name: `TV Model ${i + 1}`,
  price: (1000 + i * 50).toString(),
  description: 'High-quality TV with smart features.',
  image: 'https://via.placeholder.com/300',
}));

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { addToCart } = useCart();

  const renderItem = ({ item }: { item: (typeof products)[0] }) => (
    <TouchableOpacity
      className="bg-gray-800 rounded-xl m-2 p-2 flex-1"
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Image
        source={{ uri: item.image }}
        className="w-full h-32 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-white font-bold">{item.name}</Text>
      <Text className="text-gray-400">${item.price}</Text>
      <TouchableOpacity
        className="bg-green-600 rounded-lg p-2 mt-2"
        onPress={() => addToCart(item)}
      >
        <Text className="text-white text-center font-bold">Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-black p-2">
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

export default HomeScreen;
