import { nowPlayingAction } from '@/core/ actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/ actions/movies/popular.action';
import { useQuery } from '@tanstack/react-query';

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  return {
    nowPlayingQuery,
    popularQuery,
  };
};
