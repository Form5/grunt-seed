module.exports = {
  buildAllDev: [
    'clean:dev',
    'buildViews',
    'minifyImages',
    'buildCss',
    'buildJs',
    'copyFiles'
  ],
  buildAllDist: [
    'default',
    'clean:dist',
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