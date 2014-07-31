grunt-bootstrap-prefix
================

[![Build Status](https://travis-ci.org/cm0s/grunt-bootstrap-prefix.svg?branch=master)](https://travis-ci.org/cm0s/grunt-bootstrap-prefix)

> Prefix Bootstrap classes located in the css and also in the js files

This task use a python script to perform the class prefixing.
The original python script has been created by Francois Aucamp ([git repo](https://github.com/faucamp/bootstrap_namespace_prefixer))

###*!! PROJECT DISCONTINUED !!*
Maintaining a script to prefix bootstrap javascript files is quite a headache. Being able to set a list of rules which must be working for any special cases we can find in a javascript file is a lot of work, especially to make it work with different Bootstrap versions. It's less time-consuming to diff each new Bootstrap release and add the prefixes manually.

However, for those who customize the Bootstrap Less/Sass it's necessary to have a way to automate the prefixing of the compiled files. Setting a list of rules to prefix a CSS file is quite trivial compared to a javascript file. Actually, there is already a project which prefix CSS classes : https://github.com/anasnakawa/grunt-css-prefix.

For those reasons I decided to discontinue this project. You can still use it, but I will not maintain it.

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
              jsSource: ['lib/bootstrap/js/bootstrap.js'],

              //(Optional) Path to the folder where the prefixed JS file(s) will be created
              jsDest: 'public/bootstrap/js'
          }
      }
   }
});
```
