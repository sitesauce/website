let mix = require('laravel-mix')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')({
	// Specify the paths to all of the template files in your project
	content: ['./resources/**/*.html'],

	// Include any special characters you're using in this regular expression
	defaultExtractor: content => content.match(/[\w-/:.%]+(?<!:)/g) || [],
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.options({
		processCssUrls: false,
		postCss: [tailwind(), autoprefixer(), ...(mix.inProduction() ? [purgecss] : [])],
	})

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel Assets
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .sass('resources/sass/cp.scss', 'public/vendor/app/css');
