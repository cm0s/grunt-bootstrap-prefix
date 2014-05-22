grunt-bootstrap-prefix
================

> Prefix Bootstrap classes by modifying the compiled css and js files

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
   bootstrap-prefix: {
      options: {
          cssPath: 'lib/bootstrap/css',   //(Required) Path to the folder where are located the bootstrap CSS files
          cssDest: 'public/bootstrap/css', //(Required) Path to the folder where will be created the prefixed CSS files
          jsPath: 'lib/bootstrap/js', //(Optional) Path to the folder where are located the bootstrap JS files
          jsDest: 'public/bootstrap/js' //(Optional) Path to the folder where will be created the prefixed JS files
      }
   }
});
```