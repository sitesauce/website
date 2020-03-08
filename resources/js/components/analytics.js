if (new URL(window.location.href).host == 'sitesauce.app') {
	const script = document.createElement('script', {})
	script.async = true
	script.src = 'https://cdn.usefathom.com/tracker.js'
	script.id = 'fathom-script'
	script.addEventListener('load', () => {
		// eslint-disable-next-line no-undef
		fathom('set', 'siteId', 'ATRFRDDR')
		// eslint-disable-next-line no-undef
		fathom('trackPageview')
	})
	document.body.appendChild(script)
}
