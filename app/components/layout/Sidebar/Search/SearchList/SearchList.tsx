import React, { FC } from 'react'
import styles from './SearchList.module.scss'
import { IMovie } from '@/shared/types/movie.types'
import Link from 'next/link'
import { getMovieUrl } from '@/config/url.config'
import Image from 'next/image'

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }): JSX.Element => {
	return <div className={styles.list}>
		{movies.length
			? movies.map(movie => {
				return (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<a>
							<Image src={movie.poster}
							       width={50}
							       height={50}
							       alt={movie.title}
							       objectFit={'cover'}
							       objectPosition={'top'}
							       draggable={false} />
							<span>{movie.title}</span>
						</a>
					</Link>
				)
			})
			: <div className={'text-white text-center my-4'}>Movies not found!</div>}
	</div>
}



