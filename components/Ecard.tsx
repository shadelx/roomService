import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';

const Ecard = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <TouchableOpacity
        className="active:scale-95 transition-transform"
        hasTVPreferredFocus={true}
        tvParallaxProperties={{ magnification: 1.1 }}
      >
        <Image
          className="w-full h-48 p-8 rounded-t-lg"
          source={{ uri: 'https://placehold.co/500' }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View className="px-5 pb-5">
        <TouchableOpacity className="mb-2" hasTVPreferredFocus={false}>
          <Text
            className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center mt-2.5 mb-5">
          <View className="flex-row items-center space-x-1">
            {/* Star ratings */}
            {[1, 2, 3, 4].map((star) => (
              <Text key={star} className="text-yellow-300 text-base">
                ★
              </Text>
            ))}
            <Text className="text-gray-200 dark:text-gray-600 text-base">
              ★
            </Text>
          </View>

          <Text className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </Text>

          <TouchableOpacity
            className="bg-blue-700 hover:bg-blue-800 focus:bg-blue-900 active:bg-blue-900 px-5 py-2.5 rounded-lg"
            hasTVPreferredFocus={false}
            tvParallaxProperties={{ magnification: 1.05 }}
          >
            <Text className="text-white font-medium text-sm text-center">
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Ecard;
