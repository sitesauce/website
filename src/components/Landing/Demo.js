import Image from 'components/Image'

const Demo = () => {
	return (
		<div id="demo" className="bg-gray-50 relative py-24 px-5%">
			<Image src="/img/background/scribble-section5-left.svg" alt="" className="image-63" unsized loading="lazy" />
			<div className="container text-center">
				<h1 className="max-w-sm md:max-w-xl mt-0 font-spoof text-black text-4xl md:text-5xl leading-11 mx-auto tracking-tighter text-center font-bold mb-4">See it in action</h1>
				<p className="font-ttnorms text-black leading-7 text-xl text-center mb-4 mt-0 max-w-3xl mx-auto">Learn everything Sitesauce has to offer in this short introductory video.</p>
				<div className="relative mt-20 border-4 border-brand-400 rounded-lg shadow-brand overflow-hidden z-1">
					<div className="relative p-0" style={{ paddingTop: '56.25% !important', margin: '-2px' }}>
						<iframe className="absolute inset-0 w-full h-full" title="Demo video" src="https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body,img{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:0 auto}span{margin:auto;height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p><img src=http://localhost:3000/_next/image?url=https://brand-assets.sitesauce.app/twitter-card.png&w=3840&q=75 alt='Sitesauce Demo Video' loading='lazy'><span>▶</span></a>" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen loading="lazy" />
					</div>
				</div>
			</div>
			<Image src="/img/background/green-section3-blob.png" alt="" className="image-48" unsized loading="lazy" />
			<Image src="/img/background/scribble-section3-left.svg" alt="" className="image-57" unsized loading="lazy" />
			<Image src="/img/background/blue-section4-blob.png" alt="" className="image-47 z-10" unsized loading="lazy" />
			<Image src="/img/background/scribble-section4-right.svg" alt="" className="image-58 z-20" unsized loading="lazy" />
		</div>
	)
}

export default Demo
