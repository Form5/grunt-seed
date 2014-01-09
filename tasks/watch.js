module.exports = {
  jade: {
    files: ['src/views/**/*.jade'],
    tasks: ['buildViews']
  },
  sass: {
    files: ['src/css/**/*.scss'],
    tasks: ['buildCss','modernizr']
  },
  img: {
    files: ['src/img/**/*.{jpg,png,gif,jpeg,ico}'],
    tasks: ['minifyImages']
  },
  webfonts: {
    files: ['src/fonts/**.{eof,woff,ttf}'],
    tasks: ['copyFiles']
  },
  javascript: {
    files: ['src/js/**/*.js'],
    tasks: ['buildJs', 'modernizr', 'copyFiles']
  },
  ico: {
    files: ['src/img/**/*.ico'],
    tasks: ['copyFiles']
  },
  dev: {
    files: [
      'dev/css/**/*.css',
      'dev/**/*.html',
      'dev/img/**/*.{png,jpg,jpeg,gif,svg}',
      'dev/js/**/*.js'
    ],
    options: {
      livereload: true
    }
  }
};