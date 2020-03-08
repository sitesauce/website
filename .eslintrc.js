module.exports = {
    root: true,
	env: {
		browser: true,
        es6: true,
        commonjs: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended'
	],
	globals: {
		Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        route: 'readonly',
    },
	parserOptions: {
        parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'vue'
	],
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
        ],
        'vue/html-end-tags': [
            'error'
        ],
        'vue/html-quotes': [
            'error',
            'double'
        ],
        'vue/mustache-interpolation-spacing': [
            'error',
            'always'
        ],
        'vue/no-multi-spaces': [
            'error'
        ],
        'vue/require-prop-types': [
            'error'
        ],
        'vue/this-in-template': [
            'error',
            'never'
        ],
    },
    reportUnusedDisableDirectives: true
}
