module.exports = {
  'devFile': 'src/js/vendor/modernizr.js',

  'outputFile': 'dev/js/vendor/modernizr-custom.js',

  'extra' : {
    'shiv' : false,
    'printshiv' : true
  },

  'files': [
    'src/css/*/**',
    'src/js/*/**'
  ]
};