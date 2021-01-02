import '../styles/app.css'
import * as Fathom from 'fathom-client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
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
