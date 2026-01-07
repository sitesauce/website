import { compareDesc, parse as parseDate } from 'date-fns'

function importAll(r) {
	return r
		.map(data => {
			const meta = data.frontmatter

			meta.slug = data.file.split('/').pop().replace('.mdx', '').replace('.md', '')
			meta.image = meta.image || `https://images.sitesauce.app/**${meta.title}**.png?md=1&theme=brand_dark`

			return meta
		})
		.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}

export function getAllPostPreviews() {
	return importAll(Object.values(import.meta.glob('@/pages/blog/*.{md,mdx}', { eager: true })))
}

export function getAllGuidePreviews() {
	return importAll(Object.values(import.meta.glob('@/pages/guides/*.{md,mdx}', { eager: true })))
}
