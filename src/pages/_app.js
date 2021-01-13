import '../styles/app.css'
import * as Fathom from 'fathom-client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const installQuicksand = pid => {
	var tracker = document.createElement('script')
	var firstScript = document.getElementsByTagName('script')[0]
	tracker.id = 'quicksand-script'
	tracker.async = true
	tracker.src = `https://analytics.quicksand.ai/qsand.js?pid=${pid}`
	firstScript.parentNode.insertBefore(tracker, firstScript)
}

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		installQuicksand('KJejxqoQM93RkeFNJspn')

		Fathom.load('ATRFRDDR', {
			includedDomains: ['sitesauce.app'],
			url: 'https://viper.sitesauce.app/script.js',
		})

		const onRouteChangeComplete = () => Fathom.trackPageview()

		router.events.on('routeChangeComplete', onRouteChangeComplete)

		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete)
		}
	}, [])

	return <Component {...pageProps} />
}

export default MyApp
