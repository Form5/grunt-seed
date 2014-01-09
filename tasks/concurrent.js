module.exports = {
  buildAllDev: [
    'buildViews',
    'minifyImages',
    'modernizr',
    'buildCss',
    'buildJs',
    'copyFiles'
  ],
  buildAllDist: [
    'default',
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