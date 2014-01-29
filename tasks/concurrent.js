module.exports = {
  buildAllDev: [
    'buildViews',
    'minifyImages',
    'buildCss',
    'buildJs',
    'copyFiles'
  ],
  buildAllDist: [
    'jade:dist',
    'sass:dist',
    'modernizr',
    'copy:dist',
    'imagemin:dist',
    'svgmin:dist',
  ],
  distOptimize: [
    'cssmin:dist',
    'uglify:dist'
  ]
};