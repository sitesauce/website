import Cookies from 'js-cookie'
import axios from 'axios'

window.affiliate = () => ({
	affiliate: null,
	via: new URL(location.href).searchParams.get('via'),
	init() {
		if (!this.via) return this.$nextTick(() => (this.affiliate = Cookies.getJSON('sitesauce_affiliate')))

		axios
			.post(`https://sitesauce.wip/api/affiliates/${encodeURIComponent(this.via)}`)
			.then(response => {
				this.$nextTick(() => (this.affiliate = response.data))

				Cookies.set('sitesauce_affiliate', response.data, { expires: 30, domain: '.sitesauce.app', secure: true, sameSite: 'lax' })
			})
			.catch(error => {
				if (!error.response || error.response.status !== 404) return console.log('Something went wrong')

				console.log('Referral does not exist. Register for our affiliate program here:\nhttps://app.sitesauce.app/affiliate')
			})
	},
})
