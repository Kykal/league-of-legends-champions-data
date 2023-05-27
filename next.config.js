/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ddragon.leagueoflegends.com',
				port: '',
				pathname: '/cdn/**/img/champion/**',
			},
			{
				protocol: 'https',
				hostname: 'ddragon.leagueoflegends.com',
				port: '',
				pathname: '/cdn/img/champion/loading/**.jpg',
			},
			{
				protocol: 'https',
				hostname: 'ddragon.leagueoflegends.com',
				port: '',
				pathname: '/cdn/img/champion/splash/**',
			}
		],
	},
};

module.exports = nextConfig
