import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

interface CategoryMenuProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          className={`px-4 py-2 rounded-full mx-1 ${
            selectedCategory === item ? 'bg-indigo-600' : 'bg-gray-700'
          }`}
          onPress={() => onSelect(item)}
        >
          <Text className="text-white font-bold">{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default CategoryMenu;
