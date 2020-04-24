window.producthunt = () => ({
	show: false,
	init() {
		if (new URLSearchParams(window.location.search).get('ref') == 'producthunt') return this.hide()

		if (localStorage.getItem('hideBanner') === null) setTimeout(() => (this.show = true), 500)
	},
	hide() {
		localStorage.setItem('hideBanner', true)
		this.show = false
	},
})
