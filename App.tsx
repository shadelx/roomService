import './styles/global.css';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';
import { CartProvider, useCart } from './context/CartContext';
import CheckoutScreen from './screens/CheckoutScreen';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    product: {
      id: string;
      name: string;
      price: string;
      description: string;
      image: string;
    };
  };
  Cart: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// 🔹 Custom Cart Button with Badge
const CartButton = ({ navigation }: { navigation: any }) => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      className="px-3 py-1 bg-green-600 rounded-lg relative"
    >
      <Text className="text-white font-bold">Cart</Text>
      {totalCount > 0 && (
        <View className="absolute -top-2 -right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
          <Text className="text-white text-xs font-bold">{totalCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          id={undefined}
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: 'Ecommerce TV Store',
              headerRight: () => <CartButton navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: 'Product Details' }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Your Cart' }}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ title: 'Checkout' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
