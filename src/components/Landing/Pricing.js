import Image from 'components/Image'
import { useRef, useState } from 'react'

const Pricing = ({ children }) => {
	const pricingFocus = useRef()
	const [isYearly, setYearly] = useState(false)

	const changePeriod = () => {
		setYearly(state => !state)

		pricingFocus.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div id="pricing" className="bg-brand-50 px-5% py-24 relative">
			<Image src="/img/background/yellow-section6-blob.png" alt="" className="image-40" unsized loading="lazy" />
			<Image src="/img/background/scribble-section6-left.svg" alt="" className="image-59" unsized loading="lazy" />
			<div className="container text-center">
				<h2 className="max-w-sm md:max-w-xl mt-0 font-spoof text-black text-4xl md:text-5xl leading-11 mx-auto tracking-tighter text-center font-bold mb-4">Simple, no-tricks pricing</h2>
				<p ref={pricingFocus} className="font-ttnorms text-black leading-7 text-xl text-center mb-4 mt-0">
					No surprises or hidden fees, ever.
				</p>
				<Image src="/img/background/pricing-separator.png" alt="" className="image-76 mx-auto" unsized loading="lazy" />
				<div className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-brand border-4 border-brand-400">
					<div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
						<h3 className="text-2xl font-spoof text-left leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">Team Subscription</h3>
						<p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg">The Team subscription grants your entire team unlimited access to Sitesauce. You can add as many sites and deploy as many times as you want, with no cap on bandwidth or visits.</p>
						<div className="mt-8">
							<div className="flex items-center">
								<h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-brand-600 font-spoof">What's included</h4>
								<div className="flex-1 border-t-2 border-gray-200" />
							</div>
							<ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">{children}</ul>
						</div>
					</div>
					<div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
						<p className="text-xl leading-6 font-medium text-gray-900 font-spoof lg:max-w-xs lg:mx-auto mb-0 lg:mb-6">A single payment for your entire team</p>
						<div className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-900">
							<span className="font-brown">${isYearly ? 199 : 19}</span>
							<span className="text-xl leading-7 font-medium text-gray-500 font-ttnorms">/{isYearly ? 'year' : 'month'}</span>
						</div>
						<div className="lg:mt-6">
							<div className="rounded-md shadow">
								<a href={`https://app.sitesauce.app/register${isYearly ? '?plan=yearly' : ''}`} className="flex items-center justify-center px-5 py-3 leading-6 font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-brand border-2 border-brand-400 bg-white hover:bg-brand-400 hover:shadow-brand-hover text-brand-400 hover:text-white text-lg font-spoof relative z-20">
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
						<a className="font-spoof font-bold text-lg" href="https://savvycal.com/sitesauce/get-started" target="_blank" rel="noreferrer">
							Schedule now
						</a>
						<svg className="ml-2 w-3 h-3" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 1l7 4.5L5 10M12 5.5H1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>
				<div className="pt-12 md:pt-0 z-30 relative">
					<h1 className="text-center font-spoof text-2xl leading-10 font-extrabold text-gray-900 relative">{isYearly ? 'Monthly Pricing' : 'Annual pricing'}</h1>
					<p className="block text-black font-ttnorms text-lg leading-relaxed mx-auto max-w-xxs my-0 text-center extra">{isYearly ? 'Make a smaller payment every month for more granular control.' : 'Make a single payment per year and get ~15% discount.'}</p>
					<div className="inline-flex items-center justify-center mt-10 font-spoof text-black w-full pb-2">
						<a className="font-spoof font-bold text-lg" href="#pricing-focus" onClick={changePeriod}>
							See {isYearly ? 'monthly' : 'annual'} pricing
						</a>
						<svg className="ml-2 w-3 h-3" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 1l7 4.5L5 10M12 5.5H1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>
			</div>
			<Image src="/img/background/purple-section7-blob.png" alt="" className="image-46" unsized loading="lazy" />
			<Image src="/img/background/scribble-section7-right.svg" alt="" className="image-60" unsized loading="lazy" />
		</div>
	)
}

export const PricingFeature = ({ children }) => (
	<li className="flex items-start lg:col-span-1">
		<div className="flex-shrink-0">
			<svg className="h-5 w-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
				<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
			</svg>
		</div>
		<p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">{children}</p>
	</li>
)

export default Pricing
