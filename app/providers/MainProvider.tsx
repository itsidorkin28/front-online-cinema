import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface IMainProvider {
	children: ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
export const MainProvider = ({ children }: IMainProvider): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}



