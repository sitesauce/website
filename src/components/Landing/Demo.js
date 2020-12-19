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
						<iframe className="absolute inset-0 w-full h-full" title="Demo video" src="https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body,img{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:0 auto}span{margin:auto;height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p><img src=https://sitesauce.app/_next/image?url=https://brand-assets.sitesauce.app/twitter-card.png&w=3840&q=75 alt='Sitesauce Demo Video' loading='lazy'><span>▶</span></a>" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen loading="lazy" />
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

export const DemoVideo = ({ className }) => {
	const placeholder = `
			<style>
				* {
                    margin: 0;
                    overflow: hidden;
                    width: 100vw;
                    height: 100vh;

                }
                a {
                    position: relative;
                    display: flex;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(50%);
                }
                svg {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    width: 5rem;
                    height: 5rem;
                    color: #047481;
                    margin: auto;
                    filter: drop-shadow(2px 2px 4px rgba(1, 68, 81, .4));
                    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
                }
                a:hover svg {
                    color: #0694a2;
                }
			</style>
			<a href="https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p">
                <img src="https://sitesauce.app/_next/image?url=https://brand-assets.sitesauce.app/twitter-card.png&w=3840&q=75" alt="Sitesauce Demo Video" loading="lazy" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
                </svg>
			</a>
        `

	return (
		<div className={`mb-6 sm:mb-0 w-full lg:w-1/2 border-4 border-brand-400 rounded-lg shadow-brand overflow-hidden transform -rotate-6 sm:rotate-3 -translate-x-2 ${className}`}>
			<div className="aspect-w-16 aspect-h-9">
				<iframe title="Demo video" src="https://player.vimeo.com/video/413646262?title=0&byline=0&portrait=0&texttrack=en&dnt=1&transparent=1&quality=1080p" srcDoc={placeholder} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen loading="lazy" />
			</div>
		</div>
	)
}

export default Demo
