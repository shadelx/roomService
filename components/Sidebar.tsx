import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

interface SidebarProps {
  categories?: string[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [collapsed, setCollapsed] = useState(false);

  const widthAnim = useRef(new Animated.Value(180)).current; // initial expanded width
  const labelOpacity = useRef(new Animated.Value(1)).current;

  const toggleSidebar = () => {
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: collapsed ? 180 : 60, // expanded : collapsed
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(labelOpacity, {
        toValue: collapsed ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();

    setCollapsed(!collapsed);
  };

  const navItems = [
    { label: 'Home', icon: 'home', action: () => navigation.navigate('Home') },
    {
      label: 'Cart',
      icon: 'shopping-cart',
      action: () => navigation.navigate('Cart'),
    },
    {
      label: 'Checkout',
      icon: 'credit-card',
      action: () => navigation.navigate('Checkout'),
    },
  ];

  return (
    <Animated.View
      style={{ width: widthAnim }}
      className="bg-gray-900 p-2 rounded-sm shadow-lg"
    >
      {/* Collapse Toggle */}
      <TouchableOpacity
        className="mb-4 py-2 px-2 flex-row items-center justify-center"
        onPress={toggleSidebar}
      >
        <MaterialIcons
          name={collapsed ? 'arrow-forward-ios' : 'arrow-back-ios'}
          size={20}
          color="white"
        />
        <Animated.View style={{ opacity: labelOpacity }}>
          <Text className="text-white font-bold ml-2">Menu</Text>
        </Animated.View>
      </TouchableOpacity>

      <ScrollView>
        {/* Navigation Items */}
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            className="py-3 px-2 mb-2 rounded-sm bg-gray-800 flex-row items-center"
            onPress={item.action}
          >
            <FontAwesome5 name={item.icon as any} size={20} color="white" />
            <Animated.View style={{ opacity: labelOpacity }}>
              <Text className="text-white font-semibold text-lg ml-3">
                {item.label}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        ))}

        {/* Categories */}
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            className={`py-3 px-2 mb-2 rounded-sm flex-row items-center ${
              selectedCategory === cat
                ? 'bg-indigo-500 shadow-md'
                : 'bg-gray-800'
            }`}
            onPress={() => onSelectCategory?.(cat)}
          >
            <MaterialIcons name="category" size={20} color="white" />
            <Animated.View style={{ opacity: labelOpacity }}>
              <Text className="text-white font-semibold text-lg ml-3">
                {cat}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default Sidebar;
