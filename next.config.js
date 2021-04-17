const withMDX = require('@next/mdx')({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx'],
	poweredByHeader: false,
	crossOrigin: 'use-credentials',
	images: {
		domains: ['brand-assets.sitesauce.app', 'images.sitesauce.app', 'miguelpiedrafita.com'],
	},
	future: {
		webpack5: true,
	},
	rewrites: () => [
		{ source: '/blog/feed.xml', destination: '/_next/static/posts.xml' },
		{ source: '/guides/feed.xml', destination: '/_next/static/guides.xml' },
		{ source: '/analytics', destination: 'https://app.usefathom.com/share/atrfrddr/sitesauce.app' },
		{ source: '/sites/1025/:path*', destination: 'https://app.usefathom.com/sites/1025/:path*' },
	],
	redirects: () => [{ source: '/status', destination: 'https://sitesauce.instatus.com/', permanent: true }],
	webpack: (config, { dev, isServer }) => {
		if (!dev && isServer) {
			const originalEntry = config.entry

			config.entry = async () => {
				const entries = { ...(await originalEntry()) }
				entries['./scripts/build-rss.js'] = './scripts/build-rss.js'
				return entries
			}
		}

		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom': 'preact/compat',
			})
		}

		return config
	},
	exportPathMap(defaultPathMap, { dev, outDir }) {
		if (dev) return

		const generateRSS = require('./.next/server/scripts/build-rss.js').default
		generateRSS(outDir)
	},
})
