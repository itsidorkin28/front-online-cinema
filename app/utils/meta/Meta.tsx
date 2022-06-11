import React from 'react'
import logoImage from '@/assets/images/logo.svg'
import Head from 'next/head'
import { ISeo } from '@/utils/meta/meta.interface'
import { useRouter } from 'next/router'
import { siteName, titleMerge } from '@/config/seo.config'
import { onlyText } from '@/utils/string/clearText'

export const Meta = ({ title, description, image, children }: ISeo): JSX.Element => {

	const { asPath } = useRouter()
	const currentUrl = `${process.env.REACT_APP_URL}${asPath}`

	return <>
		<Head>
			<title itemProp={'headline'}>{titleMerge(title)}</title>
			{description
				? (
					<>
						<meta
							itemProp={'description'}
							name={'description'}
							content={onlyText(description, 152)}
						/>
						<link rel={'canonical'} href={currentUrl} />
						<meta property={'og:locale'} content={'en'} />
						<meta property={'og:title'} content={titleMerge(title)} />
						<meta property={'og:url'} content={currentUrl} />
						<meta property={'og:image'} content={image || logoImage} />
						<meta property={'og:site_name'} content={siteName} />
						<meta
							property={'og:description'}
							content={onlyText(description, 197)}
						/>
					</>
				)
				: <meta name={'robots'} content={'noindex, nofollow'} />}
		</Head>
		{children}
	</>
}



