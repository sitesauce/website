import fs from 'fs'
import RSS from 'rss'
import { getAllGuidePreviews, getAllPostPreviews } from 'utils/getContent'

const generateFeed = () => {
	const feed = new RSS({
		title: 'Sitesauce',
		site_url: 'https://sitesauce.app',
		feed_url: `https://sitesauce.app/feed.xml`,
	})

	getAllPostPreviews().forEach(post => {
		feed.item({
			title: post.title,
			guid: post.slug,
			url: `https://sitesauce.app/${post.slug}`,
			date: new Date(post.publishedDate).toISOString(),
			description: post.description,
		})
	})

	fs.writeFileSync('./.next/static/posts.xml', feed.xml({ indent: true }))

	getAllGuidePreviews().forEach(guide => {
		feed.item({
			title: guide.title,
			guid: guide.slug,
			url: `https://sitesauce.app/${guide.slug}`,
			date: new Date(guide.publishedDate).toISOString(),
			description: guide.description,
		})
	})

	fs.writeFileSync('./.next/static/guides.xml', feed.xml({ indent: true }))
}

generateFeed()
