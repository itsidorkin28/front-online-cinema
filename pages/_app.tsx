import '../app/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import { MainProvider } from '../app/providers/MainProvider'
import { ComponentAuthFieldsType } from '@/shared/types/auth.types'

type AppPropsType = AppProps & ComponentAuthFieldsType

function MyApp({ Component, pageProps }: AppPropsType) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
