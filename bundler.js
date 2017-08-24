require('simple-bundler')

    .pug('src/index.pug', 'public')

    .sass('src/sass/app.sass', 'public')

    .js('src/js/app.js', 'public')
