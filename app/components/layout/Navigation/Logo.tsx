import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'

export const Logo = (): JSX.Element => {
	return <Link href={'/'}>
		<a className={'px-layout mb-10 block'}>
			<Image src={logoImage} width={250} height={100} alt={'online-cinema'}
			draggable={false}/>
		</a>
	</Link>
}



