module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: 'src/css/',
        src: ['*.scss'],
        dest: 'dev/css/',
        ext: '.css'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'src/css/',
        src: ['*.scss'],
        dest: 'dist/css/',
        ext: '.css'
      }
    ]
  }
};