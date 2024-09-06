import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
