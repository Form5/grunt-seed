module.exports = {
  dev: {
    files: [
      // Javascript files
      {
        expand: true,
        cwd: 'dev/js',
        src: '**/*.js',
        dest: 'app/js'
      },
      // Webfonts
      {
        expand: true,
        cwd: 'dev/fonts',
        src: '**',
        dest: 'app/fonts'
      },
      // Ico files
      {
        expand: true,
        cwd: 'dev/img',
        src: '**/*.ico',
        dest: 'app/img'
      }
    ]
  },
  dist: {
    files: [
      // Webfonts
      {
        expand: true,
        cwd: 'dev/fonts',
        src: '**',
        dest: 'dist/fonts'
      },
      // Ico files
      {
        expand: true,
        cwd: 'dev/img',
        src: '**/*.ico',
        dest: 'dist/img'
      }
    ]
  }
};