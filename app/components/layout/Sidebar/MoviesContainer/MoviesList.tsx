import React from 'react'
import styles from './MoviesList.module.scss'
import { IMoviesList } from '@/components/layout/Sidebar/MoviesContainer/movies-list.interface'
import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieItem'
import Link from 'next/link'

const MoviesList = ({title, link, movies}: IMoviesList) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>
				{title}
			</div>
			{movies.map(movie => {
				return <MovieItem key={movie._id} movie={movie}/>
			})}
			<Link href={link}>
				<a className={styles.button}>
					See more
				</a>
			</Link>
		</div>
	)
}

export default MoviesList
