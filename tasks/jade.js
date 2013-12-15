module.exports = {
  dev: {
    options: {
      pretty: true,
      data: function() {
        return {
          env: 'development'
        };
      }
    },
    files: [
      {
        expand: true,
        cwd: 'dev/views/',
        src: ['*.jade', 'partials/*.jade'],
        dest: 'app/',
        ext: '.html'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'dev/views/',
        src: ['*.jade', 'partials/*.jade'],
        dest: 'dist/',
        ext: '.html'
      }
    ]
  }
};