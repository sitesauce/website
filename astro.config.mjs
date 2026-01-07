// @ts-check
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import getReadingTime from 'reading-time'
import { defineConfig } from 'astro/config'
import { toString } from 'mdast-util-to-string'

const remarkReadingTime = () => {
	return (tree, { data }) => {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		data.astro.frontmatter.readingTime = readingTime.text
	}
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		mdx({
			remarkPlugins: [remarkReadingTime],
		}),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
})
