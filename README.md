grunt-bootstrap-prefix
================

[![Build Status](https://travis-ci.org/cm0s/grunt-bootstrap-prefix.svg?branch=master)](https://travis-ci.org/cm0s/grunt-bootstrap-prefix)

> Prefix Bootstrap classes located in the css and also in the js files

This task use a python script to perform the class prefixing.
The original python script has been created by Francois Aucamp ([git repo](https://github.com/faucamp/bootstrap_namespace_prefixer))


### Usage
Install this plugin with the following command:

```js
npm install grunt-bootstrap-prefix --save-dev
```

Load the plugin in your Gruntfile.js:

```js
grunt.loadNpmTasks('grunt-bootstrap-prefix');
```

Running `grunt grunt-bootstrap-prefix`

```js
// Project configuration.
grunt.initConfig({
   bootstrap_prefix: {
      my_bootstrap{
          options: {
              // (Required) List of bootstrap CSS file(s). The first file must be the main bootstrap CSS file. The
              // script parse it to retrieve all the bootstrap CSS classes which are then used to prefix the JS file(s).
              // It's also possible to put minified CSS files in the list.
              cssSource: ['lib/bootstrap/css/bootstrap.css','lib/bootstrap/css/bootstrap-theme.css'],

              //(Required) Path to the folder where the prefixed CSS files will be created
              cssDest: 'public/bootstrap/css',

              //(Optional) List of bootstrap JS file(s). It's also possible to put minified files in the list.
              jsSource: ['lib/bootstrap/js/bootstrap.js],

              //(Optional) Path to the folder where the prefixed JS file(s) will be created
              jsDest: 'public/bootstrap/js'
          }
      }
   }
});
```