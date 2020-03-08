module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-scss'],
	rules: {
		indentation: ['tab'],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['/tailwind/', '/apply/', '/screen/', '/responsive/'],
			},
		],
	},
}
