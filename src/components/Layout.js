import Header from './Header'
import Footer from './Footer'
import AffiliateBanner from './AffiliateBanner'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

const Layout = ({ title = 'A static site for your dynamically-generated website', description = 'Sitesauce converts your dynamic websites into static sites, so you can keep your existing workflow while enjoying all the benefits static sites provide.', image = 'https://brand-assets.sitesauce.app/twitter-card.png', children }) => {
	const router = useRouter()
	return (
		<>
			<DefaultSeo
				title={title}
				description={description}
				canonical={'https://sitesauce.app/' + (router.asPath || router.pathname)}
				openGraph={{
					type: 'website',
					url: 'https://sitesauce.app/' + (router.asPath || router.pathname),
					title,
					description,
					images: [{ url: image }],
					site_name: 'Sitesauce',
				}}
				twitter={{
					handle: '@m1guelpf',
					site: '@m1guelpf',
					cardType: 'summary_large_image',
				}}
			/>
			<div className="antialiased min-h-screen flex flex-col">
				<Header />
				<div className="flex-1 bg-brand-50">{children}</div>
				<Footer />
				<AffiliateBanner />
			</div>
		</>
	)
}

export default Layout
