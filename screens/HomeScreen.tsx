import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = Array.from({ length: 16 }).map((_, i) => ({
  id: String(i + 1),
  name: `TV Model ${i + 1}`,
  price: (1000 + i * 50).toString(),
  description: 'High-quality TV with smart features.',
  image: 'https://via.placeholder.com/300',
}));

const HomeScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-black p-2">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

export default HomeScreen;
