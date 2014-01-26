module.exports = {
  buildAllDev: [
    'clean:dev',
    'buildViews',
    'minifyImages',
    'modernizr',
    'buildCss',
    'buildJs',
    'copyFiles'
  ],
  buildAllDist: [
    'default',
    'clean:dist',
    'jade:dist',
    'sass:dist',
    'copy:dist',
    'imagemin:dist',
    'svgmin:dist',
  ],
  distOptimize: [
    'cssmin:dist',
    'uglify:dist'
  ]
};