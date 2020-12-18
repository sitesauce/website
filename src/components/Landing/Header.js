import { useStats } from 'hooks/stats'
import Link from 'next/link'

const Header = ({ title, description, cta }) => {
	const { data: stats } = useStats()

	const formatNumber = number => {
		if (!number) return

		return new Intl.NumberFormat(typeof navigator.language != 'undefined' ? navigator.language : 'en-EN').format(stats?.sitesauce?.sites)
	}

	return (
		<div className="relative">
			<svg className="pointer-events-none absolute top-0 right-0 transform translate-x-1/2 -mr-16 z-30" width="800" height="502" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="400" cy="102" r="400" fill="url(#heroglow_paint0_radial)" fillOpacity=".6" />
				<circle cx="209" cy="289" r="170" fill="url(#heroglow_paint1_radial)" fillOpacity=".4" />
				<defs>
					<radialGradient id="heroglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 149 251) scale(315.089)">
						<stop stopColor="#3ABAB4" />
						<stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
					</radialGradient>
					<radialGradient id="heroglow_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -40 249) scale(133.913)">
						<stop stopColor="#667EEA" />
						<stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
					</radialGradient>
				</defs>
			</svg>
			<div className="relative overflow-visible h-auto bg-brand-50 pt-24 lg:pt-48 pb-24 px-5%">
				<div className="flex flex-col-reverse sm:flex-row items-center justify-between space-x-4">
					<div className="ml-4">
						<h1 className="max-w-4xl my-6 font-spoof text-4xl md:text-5xl lg:text-6xl text-black mx-auto tracking-tight font-bold">{title}</h1>
						<div className="font-ttnorms text-black text-xl leading-relaxed lg:text-2xl max-w-2xl">{description}</div>
						<a href="https://app.sitesauce.app/register" className="text-center w-auto mx-auto mt-8 sm:mt-10 py-4 px-8 sm:px-10 rounded-lg transition duration-200 ease-in-out shadow-brand border-2 border-brand-400 bg-brand-400 inline-block text-white font-medium font-brown text-lg hover:bg-brand-500 hover:border-brand-500 hover:shadow-brand-hover transform hover:translate-x-1 hover:translate-y-1">
							{cta}
						</a>
						<p className="mt-4 sm:mt-6 text-brand-900 font-medium z-20 relative">
							We have deployed{' '}
							<Link href="/open">
								<a className="border-b-2 border-brand-700 pb-0.5">over {formatNumber(stats?.sitesauce?.deployments)} sites</a>
							</Link>{' '}
							across the internet, yours could be the next!
						</p>
					</div>
					<div className="mb-6 sm:mb-0 w-full sm:w-auto sm:flex-1 border-4 border-brand-400 rounded-lg shadow-brand z-30 overflow-hidden transform -rotate-6 sm:rotate-3 -translate-x-2">
						<div className="aspect-w-16 aspect-h-9">
							<iframe title="Demo video" src="https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body,img{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:0 auto}span{margin:auto;height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p><img src=https://sitesauce.app/_next/image?url=https://brand-assets.sitesauce.app/twitter-card.png&w=3840&q=75 alt='Sitesauce Demo Video' loading='lazy'><span>▶</span></a>" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
