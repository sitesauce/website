window.intercomSettings = {
	app_id: 'jy3c9b9t',
}

window.addEventListener(
	'scroll',
	() =>
		setTimeout(() => {
			let chat = document.createElement('script')
			chat.src = 'https://widget.intercom.io/widget/jy3c9b9t'
			document.body.appendChild(chat)
		}, 1000),
	{
		once: true,
	},
)
