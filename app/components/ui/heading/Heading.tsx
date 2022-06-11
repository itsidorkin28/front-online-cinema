import React from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading = ({ title, className }: IHeading) => {
	return (
		<h1 className={`text-white text-op-80 font-semibold ${className?.includes('xl') ? '' : 'text-3xl'} ${className}`}>
			{title}
		</h1>
	)
}

export default Heading
