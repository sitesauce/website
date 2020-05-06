Array.from(document.querySelectorAll('[data-backend-anim]')).forEach(async el => {
	const strings = [
		{ name: 'Ghost', url: 'https://ghost.org' },
		{ name: 'Statamic', url: 'https://statamic.com' },
		{ name: 'Joomla!', url: 'https://joomla.org' },
		{ name: 'CraftCMS', url: 'https://craftcms.com' },
		{ name: 'ExpressionEngine', url: 'https://expressionengine.com/' },
		{ name: 'Laravel', url: 'https://laravel.com' },
		{ name: 'Wink', url: 'https://wink.themsaid.com' },
		{ name: 'CMS', url: null },
		{ name: 'WordPress', url: 'https://sitesauce.app/for/wordpress' },
	]

	const work = i =>
		new Promise(resolve => {
			const platform = strings[i]

			el.addEventListener('transitionend', () => {
				el.classList.remove('opacity-0', 'transition-opacity', 'duration-300')
				el.innerHTML = platform.url ? `<a href="${platform.url}" class="rounded border-b-2 border-black hover:border-brand-400 hover:text-brand-400" target="_blank">${platform.name}</a>` : `<span>${platform.name}</span>`

				resolve()
			})

			setTimeout(() => el.classList.add('opacity-0', 'transition-opacity', 'duration-300'), 2000)
		})

	for (let i = 0; i < strings.length; i++) {
		await work(i)

		if (i == strings.length - 1) i = -1
	}
})
