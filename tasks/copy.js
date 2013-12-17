module.exports = {
  dev: {
    files: [
      // Javascript files
      {
        expand: true,
        cwd: 'src/js',
        src: '**/*.js',
        dest: 'dev/js'
      },
      // Webfonts
      {
        expand: true,
        cwd: 'src/fonts',
        src: '**',
        dest: 'dev/fonts'
      },
      // Ico files
      {
        expand: true,
        cwd: 'src/img',
        src: '**/*.ico',
        dest: 'dev/img'
      }
    ]
  },
  dist: {
    files: [
      // Webfonts
      {
        expand: true,
        cwd: 'src/fonts',
        src: '**',
        dest: 'dist/fonts'
      },
      // Ico files
      {
        expand: true,
        cwd: 'src/img',
        src: '**/*.ico',
        dest: 'dist/img'
      }
    ]
  }
};