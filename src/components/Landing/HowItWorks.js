const HowItWorks = ({ children }) => {
	const testimonial = children[0]
	const steps = children.slice(1)

	return (
		<div id="how-it-works" className="relative px-5% py-24 bg-white">
			<img src="/img/background/blue-section1-blob.png" srcSet="/img/background/blue-section1-blob-x500.png 500w, /img/background/blue-section1-blob.png 600w" sizes="(max-width: 767px) 250px, 300px" alt="" className="md:hidden lg:block image-35" />
			<img src="/img/background/orange-section1-blob.png" srcSet="/img/background/orange-section1-blob-x500.png 500w, /img/background/orange-section1-blob.png 600w" sizes="300px" alt="" className="image-36" />
			<img src="/img/background/scribble-section1-left.svg" alt="" className="md:hidden lg:block image-55" />
			<img src="/img/background/scribble-section1-right.svg" alt="" className="image-54" />
			<div className="container">
				<h1 className="max-w-sm md:max-w-xl mt-0 font-spoof text-black text-4xl md:text-5xl leading-11 mx-auto tracking-tighter text-center font-bold mb-4">How does it work?</h1>
				<div className="mt-10 flex flex-col-reverse lg:flex-row items-center justify-between">
					{testimonial}
					<div className="z-20 flex flex-col md:flex-row lg:flex-col items-stretch mt-12 lg:mt-0 md:mb-16 lg:mb-0 sm:space-y-16">
						{steps.map(({ props: step }, i) => (
							<Step key={i} index={i} {...step} />
						))}
					</div>
				</div>
			</div>
			<img src="/img/background/line.svg" alt="" className="image-33 _2" />
		</div>
	)
}

export const Testimonial = ({ content, children }) => (
	<div className="lg:mr-10 w-full lg:w-auto flex flex-col justify-center relative px-4 md:px-12 py-8 bg-white rounded-lg shadow-brand z-1">
		<p className="font-brown mb-0 text-3xl leading-9 text-left text-brand-400">&quot;</p>
		<div className="mb-8 text-black lg:max-w-xl text-left font-brown text-2xl md:text-3xl leading-normal">{content}</div>
		{children}
	</div>
)

export const TestimonialAuthor = ({ avatar, name, company, color, url }) => (
	<div className="text-left inline-flex items-center">
		<img src={avatar} width="40" alt={name} className="mr-3 rounded-full" />
		<p className="text-black text-lg mb-0 inline-block text-left font-spoof font-semibold leading-relaxed">
			{name}, Founder of{' '}
			<a className="border-b-2 border-transparent hover:border-current transition" href={url} target="_blank" rel="noreferrer" style={{ color }}>
				{company}
			</a>
		</p>
	</div>
)
export const Step = ({ index, title, description }) => (
	<div className={`mb-24 md:mb-0 ${index == 2 ? 'lg:mb-16' : ''}`}>
		<div className="flex flex-col h-full lg:h-auto lg:flex-row items-center lg:justify-between shadow-brand px-4 py-2 bg-brand-50 border-l-2 border-t-2 border-brand-100">
			<span className="text-6xl text-brand-900 font-jetbrains leading-12 -mt-12 bg-brand-50 border-2 border-brand-100 px-2 py-1 shadow-brand">0{index + 1}</span>
			<div className="text-center lg:text-left lg:pl-6 mt-6 lg:mt-0 px-2">
				<p className="inline-block text-brand-900 text-lg font-spoof font-medium mb-1">{title}</p>
				<div className="block text-brand-800 font-ttnorms text-lg leading-relaxed lg:max-w-sm my-0 overflow-visible text-center lg:text-left">{description}</div>
			</div>
		</div>
	</div>
)

export default HowItWorks
