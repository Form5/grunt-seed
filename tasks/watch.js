module.exports = {
  jade: {
    files: ['dev/views/**/*.jade'],
    tasks: ['buildViews']
  },
  sass: {
    files: ['dev/css/**/*.scss'],
    tasks: ['buildCss']
  },
  img: {
    files: ['dev/img/**/*.{jpg,png,gif,jpeg,ico}'],
    tasks: ['minifyImages']
  },
  webfonts: {
    files: ['dev/fonts/**.{eof,woff,ttf}'],
    tasks: ['copyFiles']
  },
  javascript: {
    files: ['dev/js/**/*.js'],
    tasks: ['buildJs', 'copyFiles']
  },
  ico: {
    files: ['dev/img/**/*.ico'],
    tasks: ['copyFiles']
  },
  dev: {
    files: [
      'app/css/**/*.css',
      'app/**/*.html',
      'app/img/**/*.{png,jpg,jpeg,gif,svg}',
      'app/js/**/*.js'
    ],
    options: {
      livereload: true
    }
  }
};