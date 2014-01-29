grunt-seed v0.1.0 [![Build Status](https://travis-ci.org/Form5/grunt-seed.png?branch=master)](https://travis-ci.org/Form5/grunt-seed) [![Dependency Status](https://gemnasium.com/Form5/grunt-seed.png)](https://gemnasium.com/Form5/grunt-seed) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
===============================================================================

This is our badass and customized front-end development workflow that uses [Grunt](http://gruntjs.com/) for task automation. This is a project seed that you can use to build your own projects on.


## Features

* Development web server
* Live reload on file changes
* [Jade](http://jade-lang.com/) for templates
* [ScSS](http://sass-lang.com/) for stylesheets
* Uses [Require.js](http://requirejs.org/) for asynchronous module loading
* Install bower dependencies with `grunt bower` and packages will be automatically placed in the correct directories (will also run on build)
* JSHint with grunt. See options in `.jshintrc`
* Minifies jpg, png, gif, svg, css, html and uglifies javascript
* Optional deployment via shell command in package.json (`grunt deploy)
* Desktop notifications on Grunt errors ([support varies](https://github.com/dylang/grunt-notify#notification-systems)):

![ScreenShot](http://clients.form5.is/assets/grunt-seed-notifications.jpg)


## Setup

```shell
$ git init your-project-name
$ cd your-project-name
$ git pull https://github.com/Form5/grunt-seed.git
$ npm install
```

### Development webserver <sup><sub>(builds to ./dev)</sub></sup>

```shell
$ grunt server
```

### Production build <sup><sub>(builds to ./dist, with minification etc)</sub></sup>

```shell
$ grunt build
```


## Structure

```
src
├── css
│   ├── main.scss
│   └── vendor
├── fonts
├── img
├── js
│   ├── main.js
│   └── vendor
└── views
    ├── index.jade
    └── shared
        ├── _head.jade
        └── layout.jade
```


## Todos and bugs

* Library of **very** common code snippets? (Generators perhaps?)
* Unit tests

See our [issue tracker](/Form5/grunt-seed/issues) for a complete list of todos, bug reports and milestones.

## Author

Form5 is a small interactive studio based in Reykjavík, Iceland. We design and build websites and apps. To learn more about us, check out [www.Form5.is](http://www.form5.is).

## Contributors

Ólafur Örn Nielsen (@olafurnielsen)

Benedikt Valdez D. Stefánsson (@benediktvaldez)

Árni Reynir Óskarsson (@arnireynir)

Ragnar Þór Valgeirsson (@rthor)
