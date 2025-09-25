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
import CartButton from './components/CartButton';

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
