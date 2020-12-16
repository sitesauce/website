import Image from 'components/Image'
import Layout from 'components/Layout'
import Link from 'next/link'
import { format as timeago } from 'timeago.js'
import { getAllPostPreviews } from 'utils/getContent'

const Blog = ({ posts }) => {
	return (
		<Layout title="Static Words - The Official Sitesauce Blog" description="News, tips, highlights, and other behind-the-scenes content from Sitesauce." image="https://brand-assets.sitesauce.app/blog-card.png">
			<div className="bg-brand-50 relative pt-24 pb-20 px-4 sm:px-6 lg:pb-0 lg:px-8 z-10">
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<span className="uppercase text-brand-900 font-brown">The Official Sitesauce Blog</span>
						<h2 className="mt-1 text-3xl leading-9 tracking-tight font-extrabold text-brand-900 sm:text-4xl sm:leading-10 font-spoof">Static Words</h2>
						<p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-brand-700 sm:mt-4 font-ttnorms">News, tips, highlights, and other behind-the-scenes content from Sitesauce.</p>
					</div>
					<div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto lg:grid-cols-3 lg:max-w-none">
						{posts.map(post => (
							<Link key={post.slug} href={`/blog/${post.slug}`}>
								<a className="flex flex-col rounded-lg shadow-brand hover:shadow-brand-hover overflow-hidden transition duration-300 ease-in-out">
									<div className="flex-shrink-0">
										<img className="h-48 w-full object-cover" src={post.image} alt={post.title} loading="lazy" />
									</div>
									<div className="border-b border-l border-r border-brand-300 flex-1 bg-white px-6 pt-3 pb-6 flex flex-col justify-between rounded-b-lg">
										<div className="flex-1">
											<div>
												<p className="font-ttnorms prose text-gray-500">{post.description}</p>
											</div>
										</div>
										<div className="mt-6 flex items-center">
											<div className="flex-shrink-0">
												<div>
													<Image className="h-10 w-10 rounded-full" width="40" height={'40'} src="https://miguelpiedrafita.com/images/_site/logo.png" alt="Miguel Piedrafita" loading="lazy" />
												</div>
											</div>
											<div className="ml-3">
												<p className="text-sm leading-5 font-medium text-gray-900 font-spoof">Miguel Piedrafita</p>
												<div className="flex text-sm leading-5 text-gray-500 font-ttnorms">
													<time dateTime={post.publishedAt}>{timeago(new Date(post.publishedAt))}</time>
													<span className="mx-1">&middot;</span>
													<span>{post.reading_time} min read</span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	return {
		props: {
			posts: getAllPostPreviews(),
		},
	}
}

export default Blog
