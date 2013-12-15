module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: 'dev/img/',
        src: ['**/*.{png,jpg,gif,jpeg}'],
        dest: 'app/img/'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'dev/img/',
        src: ['**/*.{png,jpg,gif,jpeg}'],
        dest: 'dist/img/'
      }
    ]
  }
};