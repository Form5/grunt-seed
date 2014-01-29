(function() {
  require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'vendor/domReady',
      underscore: 'vendor/underscore-min',
      jquery: 'vendor/jquery',
    },
    shim: {
      underscore: { exports: '_' }
    }
  });

  require([]);
}).call(this);
