import { useStats } from 'hooks/stats'
import { format as timeago } from 'timeago.js'

const Open = () => {
	const { data: stats } = useStats()

	return (
		<div className="pb-4 bg-brand-50">
			<div className="relative">
				<div className="absolute inset-0 h-1/2 bg-gray-50" />
				<div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<a href="/open" className="block group rounded-lg bg-brand-400 hover:bg-brand-500 overflow-hidden shadow-brand hover:shadow-brand-hover border-2 border-brand-400 hover:border-brand-500 transition duration-300 ease-in-out relative z-30">
							<div className="text-center block w-full py-3 font-spoof font-medium text-brand-400 border-b-2 border-brand-400 focus:outline-none text-lg transition duration-300 ease-in-out px-4 bg-white">
								<span>Sitesauce is an Open Startup</span>
								<span className="text-sm block md:absolute right-0 inset-y-0 pt-3 pr-2">(Stats updated {timeago(stats?.updated_at)})</span>
							</div>
							<div className="sm:grid sm:grid-cols-3">
								<div className="bg-white border-b border-brand-400 group-hover:border-brand-500 p-6 text-center sm:border-0 sm:border-r transition duration-300 ease-in-out flex flex-col items-center justify-around">
									<p className="text-5xl leading-none font-extrabold text-brand-400 font-brown my-0">{stats?.sitesauce?.deployments}</p>
									<p className="my-0 text-lg leading-6 font-medium text-gray-500 font-ttnorms">Deployments</p>
								</div>
								<div className="bg-white border-t border-b border-brand-400 group-hover:border-brand-500 p-6 text-center sm:border-0 sm:border-l sm:border-r transition duration-300 ease-in-out flex flex-col items-center justify-around">
									<p className="text-5xl leading-none font-extrabold text-brand-400 font-brown my-0">{stats?.sitesauce?.sites}</p>
									<p className="my-0 text-lg leading-6 font-medium text-gray-500 font-ttnorms">Sites</p>
								</div>
								<div className="bg-white border-t border-brand-400 group-hover:border-brand-500 p-6 text-center sm:border-0 sm:border-l transition duration-300 ease-in-out flex flex-col items-center justify-around">
									<p className="text-5xl leading-none font-extrabold text-brand-400 font-brown my-0">{stats?.sitesauce?.users}</p>
									<p className="my-0 text-lg leading-6 font-medium text-gray-500 font-ttnorms">Users</p>
								</div>
							</div>
							<div className="w-full py-2 font-spoof font-medium text-white focus:outline-none text-md transition duration-300 ease-in-out flex items-center justify-between px-4">
								<span>Check the rest of our stats on our open page</span>
								<svg viewBox="0 0 20 20" fill="currentColor" className="mt-px w-4 h-4">
									<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
								</svg>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Open
