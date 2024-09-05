import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '@/presentation/hooks/useMovies';
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

      {/* Carousel de imágenes */}
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};
export default HomeScreen;
