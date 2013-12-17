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
        cwd: 'src/views/',
        src: ['*.jade', 'partials/*.jade'],
        dest: 'dev/',
        ext: '.html'
      }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'src/views/',
        src: ['*.jade', 'partials/*.jade'],
        dest: 'dist/',
        ext: '.html'
      }
    ]
  }
};