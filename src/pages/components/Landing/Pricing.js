import { useState } from 'react'

const Pricing = ({ children }) => {
	const [isYearly, setYearly] = useState(false)

	return (
		<div id="pricing" className="bg-brand-50 px-5% py-24 relative">
			<img src="/img/background/yellow-section6-blob.png" alt="" className="image-40" />
			<img src="/img/background/scribble-section6-left.svg" alt="" className="image-59" />
			<div className="container text-center">
				<h1 className="max-w-sm md:max-w-xl mt-0 font-spoof text-black text-4xl md:text-5xl leading-11 mx-auto tracking-tighter text-center font-bold mb-4">Simple, no-tricks pricing</h1>
				<p id="pricing-focus" className="font-ttnorms text-black leading-7 text-xl text-center mb-4 mt-0">
					No surprises or hidden fees, ever.
				</p>
				<img src="/img/background/pricing-separator.png" srcSet="/img/background/pricing-separator-x500.png 500w, /img/background/pricing-separator-x800.png 800w, /img/background/pricing-separator-x1080.png 1080w, /img/background/pricing-separator.png 1448w" sizes="(max-width: 479px) 280px, (max-width: 767px) 300px, 400px" alt="" className="image-76 mx-auto" />
				<div className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-brand border-4 border-brand-400">
					<div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
						<h3 className="text-2xl font-spoof text-left leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Team Subscription</h3>
						<p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg">The Team subscription grants your entire team unlimited access to Sitesauce. You can add as many sites and deploy as many times as you want, with no cap on bandwidth or visits.</p>
						<div className="mt-8">
							<div className="flex items-center">
								<h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-brand-600 font-spoof">What's included</h4>
								<div className="flex-1 border-t-2 border-gray-200" />
							</div>
							<ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">{children}</ul>
						</div>
					</div>
					<div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
						<p className="text-xl leading-6 font-medium text-gray-900 font-spoof lg:max-w-xs lg:mx-auto mb-0 lg:mb-6">A single payment for your entire team</p>
						<div className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-900">
							<span className="font-brown">{isYearly ? 190 : 10}</span>
							<span className="text-xl leading-7 font-medium text-gray-500 font-ttnorms">/{isYearly ? 'year' : 'month'}</span>
						</div>
						<div className="lg:mt-6">
							<div className="rounded-md shadow">
								<a href={`https://app.sitesauce.app/register${isYearly ? '?plan=yearly' : ''}`} className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out shadow-brand border-2 border-brand-400 bg-white hover:bg-brand-400 hover:shadow-brand-hover text-brand-400 hover:text-white text-lg font-spoof relative z-20">
									Start your 7-day trial
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid gap-y-4 grid-rows-auto md:grid-rows-auto-2 grid-cols-1 md:grid-cols-2 mx-auto max-w-sm md:max-w-4xl pt-10" style={{ gridAutoColumns: '1fr' }}>
				<div className="border-b-2 md:border-b-0 md:border-r-2 border-dotted border-black pb-12 md:pb-0 z-30 relative">
					<h1 className="text-center font-spoof text-2xl leading-10 font-extrabold text-gray-900 relative">Schedule a call</h1>
					<p className="block text-black font-ttnorms text-lg leading-relaxed mx-auto max-w-xxs my-0 text-center extra">Jump into a call with the creator of Sitesauce to get you started.</p>
					<div className="inline-flex items-center justify-center mt-10 font-spoof text-black w-full pb-2">
						<a className="font-spoof font-bold text-lg" href="mailto:miguel@sitesauce.app?subject=Get%20Started%20Call" target="_blank" rel="noreferrer">
							Schedule now
						</a>
						<img src="/img/background/arrow.svg" alt="" className="ml-2" />
					</div>
				</div>
				<div className="pt-12 md:pt-0 z-30 relative">
					<h1 className="text-center font-spoof text-2xl leading-10 font-extrabold text-gray-900 relative">{isYearly ? 'Monthly Pricing' : 'Annual pricing'}</h1>
					<p className="block text-black font-ttnorms text-lg leading-relaxed mx-auto max-w-xxs my-0 text-center extra">{isYearly ? 'Make a smaller payment every month for more granular control.' : 'Make a single payment per year and get 20% discount.'}</p>
					<div className="inline-flex items-center justify-center mt-10 font-spoof text-black w-full pb-2">
						<a className="font-spoof font-bold text-lg" href="#pricing-focus" onClick={() => setYearly(state => !state)}>
							See {isYearly ? 'monthly' : 'annual'} pricing
						</a>
						<img src="/img/background/arrow.svg" alt="" className="ml-2" />
					</div>
				</div>
			</div>
			<img src="/img/background/purple-section7-blob.png" alt="" className="image-46" />
			<img src="/img/background/scribble-section7-right.svg" alt="" className="image-60" />
		</div>
	)
}

export const PricingFeature = ({ children }) => (
	<li className="flex items-start lg:col-span-1 {{ if index != 0 }}mt-5 lg:mt-0{{ /if }}">
		<div className="flex-shrink-0">
			<svg className="h-5 w-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
				<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
			</svg>
		</div>
		<p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">{children}</p>
	</li>
)

export default Pricing
