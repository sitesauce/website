const defaultTheme = require('tailwindcss/defaultTheme')
const hexToRgba = require('hex-to-rgba')

module.exports = {
	purge: ['./src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#edfafa',
					100: '#d5f5f6',
					200: '#afecef',
					300: '#7edce2',
					400: '#16bdca',
					500: '#0694a2',
					600: '#047481',
					700: '#036672',
					800: '#05505c',
					900: '#014451',
				},
			},
			zIndex: {
				1: '1',
				100: '100',
			},
			padding: {
				'5%': '5%',
			},
			maxHeight: {
				0: '0',
			},
			maxWidth: {
				'2xs': '8.125rem',
				xxs: '18rem',
			},
			minHeight: {
				feature: '7.5rem',
			},
			boxShadow: theme => ({
				cta: `6px 6px 0 0 ${hexToRgba(theme('colors.brand.400'), '.5')}`,
				'cta-hover': `3px 3px 0 0 ${hexToRgba(theme('colors.brand.400'), '.5')}`,
				brand: `6px 6px 0 0 ${hexToRgba(theme('colors.brand.400'), '.22')}`,
				'brand-reverse': `-6px 6px 0 0 ${hexToRgba(theme('colors.brand.400'), '.22')}`,
				'brand-hover': `3px 3px 0 0 ${hexToRgba(theme('colors.brand.500'), '.22')}`,
			}),
			translate: {
				'cta-hover': '3px',
			},
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
			lineHeight: {
				11: '2.75rem',
				12: '3.75rem',
				'extra-loose': '4.375rem',
			},
			backgroundPosition: {
				middle: '50% 50%',
			},
			backgroundSize: {
				feature: '7.8125rem',
			},
			container: {
				center: true,
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						fontFamily: theme('fontFamily.ttnorms').join(', '),
						color: theme('colors.brand.900'),
						...theme('fontSize.base'),
						strong: {
							color: theme('colors.brand.900'),
						},
						a: {
							borderRadius: theme('borderRadius.DEFAULT'),
							color: theme('colors.brand.500'),
							textDecoration: 'underline',
							'&:hover': {
								color: theme('colors.brand.700'),
							},
						},
						summary: {
							paddingLeft: theme('spacing.3'),
							marginLeft: theme('spacing.-3'),
							borderRadius: theme('borderRadius.lg'),
							cursor: 'pointer',
							'&:focus': {
								outline: 'none',
								boxShadow: `var(--tw-ring-inset) 0 0 0 0px #fff, var(--tw-ring-inset) 0 0 0 3px ${hexToRgba(theme('colors.brand.400'), '.5')}`,
							},
						},
						code: {
							backgroundColor: theme('colors.brand.100'),
							...theme('fontSize.sm'),
							fontWeight: theme('fontWeight.normal'),
							display: 'inline-block',
							borderRadius: theme('borderRadius.DEFAULT'),
							padding: `0 ${theme('spacing.1')}`,
							whitespace: 'nowrap',
							color: theme('colors.brand.600'),
							verticalAlign: 'baseline',
							'&:before, &:after': {
								content: 'none !important',
							},
						},
						img: {
							margin: '0 !important',
						},
					},
				},
				xl: {
					css: {
						fontSize: theme('fontSize.lg')[0],
						lineHeight: theme('fontSize.lg')[1],
						code: {
							fontSize: theme('fontSize.sm')[0],
							lineHeight: theme('fontSize.sm')[1],
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		({ addBase }) =>
			addBase([
				{
					'@font-face': {
						fontFamily: 'Brown',
						fontWeight: '700',
						fontStyle: 'normal',
						fontDisplay: 'swap',
						src: 'url("/fonts/brown/Brown-Bold.ttf") format("truetype")',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						fontDisplay: 'swap',
						fontWeight: '900',
						src: 'url("/fonts/tt-norms/TTNorms-Black.otf") format("opentype")',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						fontDisplay: 'swap',
						fontWeight: '900',
						fontStyle: 'italic',
						src: 'url("/fonts/tt-norms/TTNorms-BlackItalic.otf") format("woff2")',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-ExtraBold.otf') format('opentype')",
						fontWeight: 800,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-ExtraBoldItalic.otf') format('opentype')",
						fontWeight: 800,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-Bold.otf') format('opentype')",
						fontWeight: 700,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-BoldItalic.otf') format('opentype')",
						fontWeight: 700,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-Medium.otf') format('opentype')",
						fontWeight: 500,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-MediumItalic.otf') format('opentype')",
						fontWeight: 500,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-Regular.otf') format('opentype')",
						fontWeight: 400,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-Italic.otf') format('opentype')",
						fontWeight: 400,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-Light.otf') format('opentype')",
						fontWeight: 300,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-LightItalic.otf') format('opentype')",
						fontWeight: 300,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-Thin.otf') format('opentype')",
						fontWeight: 200,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-ThinItalic.otf') format('opentype')",
						fontWeight: 200,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-ExtraLight.otf') format('opentype')",
						fontWeight: 100,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Ttnorms',
						src: "url('/fonts/tt-norms/TTNorms-ExtraLightItalic.otf') format('opentype')",
						fontWeight: 100,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-Black.otf') format('opentype')",
						fontWeight: 900,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-BlackSlanted.otf') format('opentype')",
						fontWeight: 900,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-Bold.otf') format('opentype')",
						fontWeight: 700,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-BoldSlanted.otf') format('opentype')",
						fontWeight: 700,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-Light.otf') format('opentype')",
						fontWeight: 300,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-LightSlanted.otf') format('opentype')",
						fontWeight: 300,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-Medium.otf') format('opentype')",
						fontWeight: 500,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-MediumSlanted.otf') format('opentype')",
						fontWeight: 500,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-Regular.otf') format('opentype')",
						fontWeight: 400,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-RegularSlanted.otf') format('opentype')",
						fontWeight: 400,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-Thin.otf') format('opentype')",
						fontWeight: 100,
						fontStyle: 'normal',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Spoof',
						src: "url('/fonts/spoof/Spoof-ThinSlanted.otf') format('opentype')",
						fontWeight: 100,
						fontStyle: 'italic',
					},
				},

				{
					'@font-face': {
						fontFamily: 'Jetbrains Mono',
						src: "url('/fonts/jetbrains/JetBrainsMono-Regular.woff2') format('woff2'), url('/fonts/jetbrains/JetBrainsMono-Regular.woff') format('woff')",
						fontWeight: 400,
						fontStyle: 'normal',
					},
				},
			]),
	],
}
