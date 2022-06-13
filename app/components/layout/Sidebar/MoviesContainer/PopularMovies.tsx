import React from 'react'
import { useQuery } from 'react-query'
import { MovieService } from '@/services/movie.service'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import MoviesList from '@/components/layout/Sidebar/MoviesContainer/MoviesList'

const PopularMovies = () => {
	const {isLoading, data: popularMovies} = useQuery('Popular movies in sidebar', () => {
		return MovieService.getMostPopularMovies()
	})

	return isLoading
		? (<div className={'mt-11'}>
			<SkeletonLoader count={3} className={'h2-8 mb-4'}/>
		</div>)
		: <MoviesList link={'/trending'} movies={popularMovies || []} title={'Popular Movies'}/>
}

export default PopularMovies
