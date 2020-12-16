import { compareDesc, parse as parseDate } from 'date-fns'

function importAll(r) {
	return r
		.keys()
		.map(fileName => {
			const meta = r(fileName).meta

			if (meta.slug) return meta

			meta.slug = fileName.substr(1).replace('.mdx', '').substring(1)
			meta.publishedAt = parseDate(meta.publishedAt.replace('th', ''), 'MMMM d, y', new Date()).toISOString()
			meta.image = meta.image || `https://images.sitesauce.app/**${meta.title}**.png?md=1&theme=brand_dark`

			return meta
		})
		.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}

export function getAllPostPreviews() {
	return importAll(require.context('../pages/blog/?preview', true, /\.mdx$/))
}

export function getAllGuidePreviews() {
	return importAll(require.context('../pages/guides/?preview', true, /\.mdx$/))
}
