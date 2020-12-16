import Layout from 'components/Layout'
import Link from 'next/link'
import { getAllGuidePreviews } from 'utils/getContent'

const Blog = ({ guides }) => {
	return (
		<Layout title="Sitesauce Guides - An expanding collection of Sitesauce knowledge, from basics to mastery." description="An expanding collection of Sitesauce knowledge, from basics to mastery." image="https://brand-assets.sitesauce.app/guides-card.png">
			<div className="bg-brand-50 relative pt-24 pb-20 px-4 sm:px-6 lg:pb-0 lg:px-8 z-1">
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<span className="uppercase text-brand-900 font-brown">Mastering Sitesauce</span>
						<h2 className="mt-1 text-3xl leading-9 tracking-tight font-extrabold text-brand-900 sm:text-4xl sm:leading-10 font-spoof">Sitesauce Guides</h2>
						<p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-brand-700 sm:mt-4 font-ttnorms">An expanding collection of Sitesauce knowledge, from basics to mastery.</p>
					</div>
					<div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto lg:grid-cols-3 lg:max-w-none">
						{guides.map(guide => (
							<Link key={guide.slug} href={`/guides/${guide.slug}`}>
								<a className="flex flex-col rounded-lg shadow-brand hover:shadow-brand-hover transform hover:translate-x-1 hover:translate-y-1 overflow-hidden transition duration-300 ease-in-out relative">
									<div className="flex-shrink-0">
										<img className="h-48 w-full object-cover" src={guide.image} alt={guide.title} />
									</div>
									<div className="border-b border-l border-r border-brand-300 flex-1 bg-white px-6 py-3 flex flex-col justify-between rounded-b-lg">
										<div className="flex-1">
											<p className="font-ttnorms prose text-gray-500">{guide.description}</p>
										</div>
									</div>
									<div className="absolute top-3 right-3">
										<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-brand-100 text-brand-800 font-ttnorms">Tutorial</span>
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
			guides: getAllGuidePreviews(),
		},
	}
}

export default Blog
