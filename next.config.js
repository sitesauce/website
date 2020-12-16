const withMDX = require('@next/mdx')({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx'],
	poweredByHeader: false,
	crossOrigin: 'anonymous',
	images: {
		domains: ['images.sitesauce.app', 'miguelpiedrafita.com'],
	},
	experimental: {
		optimizeCss: true,
	},
	future: {
		excludeDefaultMomentLocales: true,
	},
	rewrites: () => [
		{ source: '/blog/feed.xml', destination: '/_next/static/posts.xml' },
		{ source: '/guides/feed.xml', destination: '/_next/static/guides.xml' },
	],
	webpack: (config, { dev, isServer }) => {
		if (!isServer) config.node = { fs: 'empty' }

		if (!dev && isServer) {
			const originalEntry = config.entry

			config.entry = async () => {
				const entries = { ...(await originalEntry()) }
				entries['./scripts/build-rss.js'] = './scripts/build-rss.js'
				return entries
			}
		}

		return config
	},
	exportPathMap(defaultPathMap, { dev, outDir }) {
		if (dev) return

		const generateRSS = require('./.next/server/scripts/build-rss.js').default
		generateRSS(outDir)
	},
})
