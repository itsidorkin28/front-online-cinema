import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/components/layout/Layout'
import ReduxToast from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import HeadProvider from './HeadProvider/HeadProvider'
import AuthProvider from './AuthProvider/AuthProvider'
import { ComponentAuthFieldsType } from '@/shared/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
export const MainProvider: FC<ComponentAuthFieldsType> = (
	{ children, Component: { isOnlyAdmin, isOnlyUser } },
): JSX.Element => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={{ isOnlyAdmin, isOnlyUser }}>
						<Layout>
							{children}
						</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}



