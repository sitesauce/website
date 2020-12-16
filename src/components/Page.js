import Layout from './Layout'
import { MDXProvider } from '@mdx-js/react'
import useReadingTime from 'use-reading-time'
import { useRef } from 'react'

const Img = ({ alt, title, ...props }) => (
	<div className="relative border-2 border-brand-400 shadow-brand mx-auto mb-4 overflow-hidden rounded-lg">
		<img className="w-full" alt={alt} {...props} />
		{alt && <figcaption className={`italic px-4 py-1 text-left w-auto absolute font-medium mt-0 font-ttnorms border border-brand-400 bg-brand-100 bottom-0 ${title == 'left' ? 'left-4' : 'right-4'} shadow-brand mb-4`}>{alt}</figcaption>}
	</div>
)

const mdComponents = {
	img: Img,
}

const Page = ({ title, description, image, showDate = true, children, publishedAt }) => {
	const post = useRef()
	const { readingTime } = useReadingTime(post)

	return (
		<Layout title={title} description={description} image={image ?? `https://images.sitesauce.app/**${title}**.png?md=1&theme=brand_dark`}>
			<div className="bg-brand-50 overflow-hidden pt-16 z-1 relative">
				<div className="max-w-5xl mx-auto py-8 sm:py-16 px-4 md:px-10 lg:px-0">
					<h1 className="text-4xl sm:text-5xl text-medium-purple font-spoof text-brand-900 leading-normal">{title}</h1>
					{showDate && (
						<p className="mt-4 text-brand-400 font-ttnorms text-lg">
							Posted on {publishedAt} &bull; {readingTime} min read
						</p>
					)}
					<MDXProvider components={mdComponents}>
						<div className="prose lg:prose-xl max-w-full mt-5" ref={post}>
							{children}
						</div>
					</MDXProvider>
				</div>
			</div>
		</Layout>
	)
}

export default Page
