const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('@tailwindcss/ui/colors')
const hexToRgba = require('hex-to-rgba')

module.exports = {
	theme: {
		extend: {
			colors: {
				brand: colors.teal,
				sketch: '#faf2ed',
				...colors,
			},
			padding: {
				'5%': '5%',
			},
			maxHeight: {
				0: '0',
			},
			zIndex: {
				1: '1',
			},
			maxWidth: {
				'2xs': '8.125rem',
				xxs: '18rem',
			},
			minHeight: {
				feature: '7.5rem',
			},
			lineHeight: {
				11: '2.75rem',
				12: '3.75rem',
				'extra-loose': '4.375rem',
			},
			translate: {
				'cta-hover': '6px',
			},
			boxShadow: theme => ({
				cta: `6px 6px 0 0 ${hexToRgba(theme('colors.brand.400'), '.5')}`,
				brand: `6px 6px 0 0 ${hexToRgba(theme('colors.brand.400'), '.22')}`,
				'brand-reverse': `-6px 6px 0 0 ${hexToRgba(theme('colors.brand.400'), '.22')}`,
				'brand-hover': `3px 3px 0 0 ${hexToRgba(theme('colors.brand.500'), '.22')}`,
			}),
			fontFamily: {
				jetbrains: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				ttnorms: ['Ttnorms', ...defaultTheme.fontFamily.serif],
				spoof: ['Spoof', ...defaultTheme.fontFamily.serif],
				brown: ['Brown', ...defaultTheme.fontFamily.serif],
			},
			gridTemplateColumns: {
				feature: '0.25fr 1fr',
			},
			gridTemplateRows: {
				auto: 'auto',
				'auto-2': 'repeat(2, auto)',
				'auto-3': 'repeat(3, auto)',
				'auto-6': 'repeat(6, auto)',
			},
			backgroundPosition: {
				middle: '50% 50%',
			},
			backgroundSize: {
				feature: '7.8125rem',
			},
		},
		container: {
			center: true,
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/ui')],
}
