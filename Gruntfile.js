/*
 * grunt-bootstrap-prefix
 * https://github.com/cm0s/grunt-bootstrap-prefix
 *
 * Copyright (c) 2014 Nicolas Forney
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Create the temp folder
    mkdir: {
      tmp: {
        options: {
          create: ['tmp']
        }
      }
    },

    // Configuration to be run (and then tested).
    bootstrap_prefix: {
      default_options: {
        options: {
          cssPath: 'test/fixtures',
          cssDest: 'tmp/default_options'
        }
      },
      custom_options: {
        options: {
          cssPath: 'test/fixtures',
          cssDest: 'tmp/custom_options',
          jsPath: 'test/fixtures',
          jsDest: 'tmp/custom_options'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'bootstrap_prefix', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
