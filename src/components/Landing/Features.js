import Image from 'components/Image'

const Features = ({ title, description, cta, children }) => {
	return (
		<div id="features" className="relative bg-gray-50 px-5% py-24">
			<Image src="/img/background/purple-section2-blob.png" alt="" className="image-41" unsized loading="lazy" />
			<Image src="/img/background/scribble-section2-right.svg" alt="" className="image-56" unsized loading="lazy" />
			<div className="container text-center">
				<h1 className="max-w-sm md:max-w-xl mt-0 font-spoof text-black text-4xl md:text-5xl leading-11 mx-auto tracking-tighter text-center font-bold mb-4">{title}</h1>
				<div className="font-ttnorms text-black leading-7 text-xl text-center mb-4 mt-0">{description}</div>
				<div className="mt-20 grid gap-x-13 gap-y-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-auto-6 sm:grid-rows-auto-3 lg:grid-rows-auto-2" style={{ gridAutoColumns: '1fr' }}>
					{children}
				</div>
				<a href="#pricing-focus" className="text-center w-auto mx-auto mt-12 mb-5 py-5 px-8 sm:px-24 rounded-lg transition duration-200 ease-in-out shadow-brand border-2 border-brand-400 bg-brand-400 inline-block text-white font-medium font-brown text-lg hover:bg-brand-500 hover:border-brand-500 hover:shadow-brand-hover">
					{cta}
				</a>
			</div>
			<Image src="/img/background/line.svg" alt="" className="image-33 _3 h-24 w-10 mb-6" unsized loading="lazy" />
		</div>
	)
}

export const FeatureItem = ({ icon, title, description }) => {
	const Icon = icon
	return (
		<div>
			<div className="relative min-h-feature">
				<div className="relative w-20 mx-auto">
					<Icon />
				</div>
			</div>
			<p className="inline-block text-black text-lg font-spoof font-medium mb-4 text-center">{title}</p>
			<div className="block text-black font-ttnorms text-lg leading-relaxed mx-auto max-w-xxs my-0 mb-4 text-center">{description}</div>
		</div>
	)
}

export default Features
