module.exports = {
  dist: {
    options: {
      mangle: false
    },
    files: [{
      expand: true,
      cwd: 'app/js',
      src: '**/*.js',
      dest: 'dist/js'
    }]
  }
};