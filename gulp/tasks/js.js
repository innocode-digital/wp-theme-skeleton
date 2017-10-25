let webpack = require('webpack-stream');

module.exports = (gulp, config, plugins) => () => gulp.src(config.src.js)
    .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError(err => ({
            title: 'js',
            message: err.message
        }))
    }))
    .pipe(plugins.debug({
        title: 'js:'
    }))
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(plugins.if(process.env.NODE_ENV === 'production', plugins.rename(path => {
        path.extname = `.min${path.extname}`;
    })))
    .pipe(gulp.dest(config.build.js));