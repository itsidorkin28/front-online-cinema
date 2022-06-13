import React from 'react'
import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'
import FavoriteMovies from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'
import NotAuthFavorites from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/NotAuthFavorites'

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies/>
			{true ? <FavoriteMovies/> : <NotAuthFavorites/>}
		</div>
	)
}

export default MoviesContainer
