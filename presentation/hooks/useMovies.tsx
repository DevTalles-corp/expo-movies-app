import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.action';
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming.action';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

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

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return topRatedMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
