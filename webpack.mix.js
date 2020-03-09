const mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

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

mix.options({
    terser: {
        extractComments: false,
    }
});

mix.js('resources/assets/scripts/app.js', 'public/js/app.js')
.postCss('resources/assets/styles/tailwind.css', 'public/css/app.css')
.tailwind('tailwind.config.js')
.webpackConfig({
    output: { chunkFilename: 'js/chunck/[name].[contenthash].js' },
  });

if (mix.inProduction()) {
  mix
   .version()
   .purgeCss();
}


