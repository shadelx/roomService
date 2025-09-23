import './styles/global.css';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Ecommerce TV Store',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                className="px-3 py-1 bg-green-600 rounded-lg"
              >
                <Text className="text-white font-bold">Cart</Text>
              </TouchableOpacity>
            ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
