import { View, Text } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Text className="text-3xl">RootLayout</Text>
      </View>
    </QueryClientProvider>
  );
};
export default RootLayout;
