const Footer = () => (
	<>
		<footer className="bg-brand-50">
			<div className="footer-cta pt-5 mt-5 relative z-1 bg-brand-300 pl-2 pr-4 md:px-0">
				<a href="https://app.sitesauce.app/register" className="xl:max-w-5xl mx-auto py-6 md:py-12 px-4 md:px-8 flex items-center justify-between rounded-lg shadow-cta border-2 border-brand-400 transition duration-300 ease-in-out bg-brand-400 transform hover:translate-x-cta-hover hover:translate-y-cta-hover hover:shadow-cta-hover max-w-screen-sm lg:max-w-screen-md">
					<h2 className="flex-1 text-2xl md:text-3xl leading-9 font-extrabold tracking-tight sm:leading-10 lg:mr-8 font-brown">
						<span className="text-brand-200 text-shadow">Let's get your first static site up and running.</span>
						<span className="text-brand-50">
							{' '}
							It takes less than a minute to get started. <span className="text-brand-200 text-shadow md:hidden">Click here.</span>
						</span>
					</h2>
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hidden md:block w-8 h-8 text-white">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
			<div className="py-0 pb-4 bg-brand-300 -mt-px">
				<div className="container text-center pt-12">
					<p className="my-4 text-lg text-white font-spoof">
						<span className="font-ttnorms">&copy;</span> {new Date().getFullYear()} Sitesauce. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
		<style jsx>{`
			@screen md {
				.footer-cta::before {
					@apply block absolute w-full bg-brand-50;
					content: '';
					height: 200px;
					transform: skewY(-4deg);
					z-index: -1;
					top: -90px;
				}

				.page-home .footer-cta::before {
					background: white;
				}
			}
		`}</style>
	</>
)

export default Footer
