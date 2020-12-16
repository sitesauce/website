import Image from 'components/Image'

const Header = ({ title, description, cta }) => (
	<div className="relative overflow-visible h-auto bg-brand-50 pt-24 lg:pt-48 pb-24 px-5%">
		<Image src="/img/background/scribble-header-left.svg" alt="" className="hidden lg:block absolute top-24 left-0 w-36" loading="lazy" unsized />
		<Image src="/img/background/scribble-header-right.svg" alt="" className="absolute top-16 sm:top-28 right-0 -mr-10 w-24 sm:w-40" loading="lazy" unsized />
		<div className="container text-center">
			<h1 className="max-w-4xl my-6 font-spoof text-4xl md:text-5xl text-black leading-snug md:leading-extra-loose mx-auto tracking-tight text-center font-bold">{title}</h1>
			<div className="font-ttnorms text-black text-xl leading-relaxed text-center mb-3 mx-auto">{description}</div>
			<a href="https://app.sitesauce.app/register" className="text-center w-auto mx-auto mt-12 mb-5 py-5 px-8 sm:px-24 rounded-lg transition duration-200 ease-in-out shadow-brand border-2 border-brand-400 bg-brand-400 inline-block text-white font-medium font-brown text-lg hover:bg-brand-500 hover:border-brand-500 hover:shadow-brand-hover">
				{cta}
			</a>
		</div>
	</div>
)

export default Header
