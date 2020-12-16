import { Transition } from '@headlessui/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const AffiliateBanner = () => {
	const [via, setVia] = useState(null)
	const [affiliate, setAffiliate] = useState(false)

	useEffect(() => {
		setAffiliate(Cookies.getJSON('sitesauce_affiliate') || null)
		setVia(new URL(location.href).searchParams.get('via'))
	}, [])

	useEffect(() => {
		if (!via) return

		axios
			.post(`https://sitesauce.wip/api/affiliates/${encodeURIComponent(via)}`)
			.then(response => {
				setAffiliate(response.data)

				Cookies.set('sitesauce_affiliate', response.data, { expires: 30, domain: '.sitesauce.app', secure: true, sameSite: 'lax' })
			})
			.catch(error => {
				if (!error.response || error.response.status !== 404) throw error

				// eslint-disable-next-line no-console
				console.log('Referral does not exist. Register for our affiliate program here:\nhttps://app.sitesauce.app/affiliate')
			})
	}, [via])

	return (
		<div>
			<Transition show={!!affiliate} appear enter="ease-out duration-500" enterFrom="opacity-0 scale-95 translate-y-2" enterTo="opacity-100 scale-100 translate-y-0" leave="ease-in duration-300" leaveFrom="opacity-100 scale-100 translate-y-0" leaveTo="opacity-0 scale-95 translate-y-2">
				<div className="transition transform fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-100">
					<div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="p-2 rounded-lg bg-brand-600 shadow-lg sm:p-3">
							<div className="flex items-center justify-between flex-wrap">
								{affiliate && (
									<div className="flex-1 flex items-center">
										<img src={affiliate.avatar} className="h-8 w-8 rounded-full mr-2" alt={affiliate.name} />
										<p className="font-medium text-white font-ttnorms">
											<span className="md:hidden">{affiliate.name} invited you to Sitesauce!</span>
											<span className="hidden md:inline font-spoof">Your friend {affiliate.name} has invited you to try Sitesauce.</span>
										</p>
									</div>
								)}
								<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
									<div className="rounded-md shadow-sm">
										<a href="https://app.sitesauce.app/register" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-brand-600 bg-white hover:text-brand-500 focus:outline-none focus:ring transition ease-in-out duration-150 font-ttnorms">
											Start your trial
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default AffiliateBanner
