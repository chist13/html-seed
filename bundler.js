require('jex-bundler')

	.pug('src/pug/[^_]*.pug', 'public')

	.sass('src/sass/app.sass', 'public/css')

	.js('src/js/app.js', 'public/js')
