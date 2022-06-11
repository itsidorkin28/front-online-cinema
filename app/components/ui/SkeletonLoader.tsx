import React from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'classnames'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoader = ({ className, ...props }: SkeletonProps): JSX.Element => {
	return (
		<Skeleton {...props} baseColor={'#1F2125'}
		          highlightColor={'#292A2E'}
		          className={cn('rounded-lg', className)} />
	)
}



