module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: 'dev/img/',
        src: ['**/*.svg'],
        dest: 'app/img/'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'dev/img/',
        src: ['**/*.svg'],
        dest: 'dist/img/'
      }
    ]
  },
};