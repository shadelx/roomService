import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import { products, categories } from '../data/products';

const HomeScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <View className="flex-1 flex-row bg-black">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 16 }}
        className="flex-1"
      />
    </View>
  );
};

export default HomeScreen;
