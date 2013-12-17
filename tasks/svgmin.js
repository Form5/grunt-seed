module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: 'src/img/',
        src: ['**/*.svg'],
        dest: 'dev/img/'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'src/img/',
        src: ['**/*.svg'],
        dest: 'dist/img/'
      }
    ]
  },
};