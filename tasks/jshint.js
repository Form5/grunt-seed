module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: 'dev/js/',
        src: ['**/*.js', '!vendor/*'],
        dest: 'app/js/'
      }
    ],
    options: {
      jshintrc: '.jshintrc' // Read hinting options from .jshintrc
    }
  }
};