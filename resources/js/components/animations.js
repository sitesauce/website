import lottie from 'lottie-web'

Array.from(document.querySelectorAll('[data-animation-type="lottie"]')).forEach(el => {
	const animation = lottie.loadAnimation({
		container: el,
		renderer: el.getAttribute('data-renderer'),
		loop: el.getAttribute('data-loop') == '1',
		autoplay: el.getAttribute('data-autoplay') == '1',
		path: el.getAttribute('data-src'),
	})

	if (el.getAttribute('data-speed')) {
		animation.setSpeed(el.getAttribute('data-speed'))
	}

	if (el.getAttribute('data-loop-reverse')) {
		let direction = 1
		animation.addEventListener('complete', () => {
			direction = -direction
			animation.setDirection(direction)
			animation.play()
		})
	}
})
