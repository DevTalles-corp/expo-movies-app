import { movieApi } from '@/core/api/movie-api';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { MovieDBMovieResponse } from '@/infrastructure/interfaces/moviedb-movie.response';
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    console.log('Película - HTTP cargada');

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
