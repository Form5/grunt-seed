var modRewrite = require('connect-modrewrite');

module.exports = {
  dev: {
    options: {
      hostname: '0.0.0.0',
      port: 8000,
      base: 'dev',
      livereload: {
        options: {
          open: true,
          base: 'dev'
        }
      }
    },
  }
};