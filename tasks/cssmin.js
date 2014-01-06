module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css'],
        dest: 'dist/css/',
        ext: '.css'
      }
    ]
  }
};