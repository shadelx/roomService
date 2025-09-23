import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

const products: Product[] = Array.from({ length: 16 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `TV Model ${i + 1}`,
  price: `$${(1000 + i * 50).toLocaleString()}`,
  description: 'A premium television with stunning clarity and smart features.',
  image:
    'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-108171-335257.jpg&fm=jpg',
}));

const { width } = Dimensions.get('window');
const itemWidth = width / 4 - 16; // 4 columns with margin

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: Product }) => (
    <View
      className="bg-gray-800 hover:bg-gray-700 rounded-xl m-2 shadow-lg transition-all duration-200"
      style={{ width: itemWidth }}
    >
      <TouchableOpacity
        className="flex-col p-2"
        onPress={() => navigation.navigate('ProductDetails', { product: item })}
      >
        <Image
          source={{ uri: item.image }}
          className="w-full h-24 rounded-lg mb-2"
          resizeMode="cover"
        />
        <Text className="text-sm font-semibold text-gray-100 mb-1">
          {item.name}
        </Text>
        <Text className="text-xs text-gray-400 mb-2">{item.price}</Text>
        <TouchableOpacity className="bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-full px-3 py-1 self-start">
          <Text className="text-white text-xs font-bold text-center">Add</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      {/* Container */}
      <View className="flex-1 px-4 py-2">
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={4}
          contentContainerStyle={{
            paddingBottom: 20,
            justifyContent: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
