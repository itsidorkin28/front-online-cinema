/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		REACT_APP_URL: process.env.REACT_APP_URL,
		REACT_APP_ENV: process.env.REACT_APP_ENV,
		REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
