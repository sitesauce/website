import Image from 'components/Image'

const FAQ = ({ children }) => {
	return (
		<>
			<div className="bg-white relative">
				<div id="faq" className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					<Image src="/img/background/red-section8-blob.png" alt="" className="image-45 _87" unsized loading="lazy" />
					<Image src="/img/background/scribble-section8-left.svg" alt="" className="image-61" unsized loading="lazy" />
					<h2 className="text-center font-spoof text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 relative">Frequently asked questions</h2>
					<div className="mt-8 border-t-2 border-gray-200 pt-6 prose max-w-full relative z-10">
						<dl className="my-8">
							{children.map(({ props: entry }, key) => (
								<FAQEntry key={key} i={key} {...entry} />
							))}
						</dl>
					</div>
				</div>
				<Image src="/img/background/scribble-section9-left.svg" alt="" className="hidden md:block image-62" unsized loading="lazy" />
			</div>
		</>
	)
}

export const FAQEntry = ({ children, i }) => <div className={`md:grid md:grid-cols-12 md:gap-8 pb-6 ${i > 0 ? 'border-t border-gray-200 pt-6' : ''}`}>{children}</div>

export const Question = ({ children }) => <dt className="font-spoof text-base leading-8 font-medium text-gray-900 md:col-span-5">{children}</dt>

export const Answer = ({ children }) => (
	<dd className="mt-2 md:mt-0 md:col-span-7">
		<div className="font-ttnorms leading-8 text-gray-500 text-lg faq space-y-3">{children}</div>
	</dd>
)

export default FAQ
