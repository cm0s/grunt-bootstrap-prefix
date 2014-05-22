grunt-bootstrap-prefix
================

> Prefix Bootstrap classes by modifying the compiled css and js files

This task use a python script to perform the class prefixing. The original python script has been created by
Francois Aucamp <francois.aucamp@gmail.com>.
[https://github.com/faucamp/bootstrap_namespace_prefixer](https://github.com/faucamp/bootstrap_namespace_prefixer)


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
   bootstrap-prefix: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
   }
});
```