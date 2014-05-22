/*
 * grunt-bootstrap-prefix
 * https://github.com/cm0s/grunt-bootstrap-prefix
 *
 * Copyright (c) 2014 Nicolas Forney
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var child_process = require('child_process'),
    format = require('util').format,
    _ = grunt.util._,
    exitCodes = [0, 127],
    log = grunt.log;

  grunt.registerMultiTask('bootstrap_prefix', 'Prefix Bootstrap classes by modifying the compiled css and js files', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        execOptions: {}
      }),
      callback = _.isFunction(options.callback) ? options.callback : function () {
      },
      pythonCommand = 'python tasks/bootstrap_prefix.py -c %s -d %s',
      done = this.async(),
      stdout = options.stdout !== undefined ? options.stdout : true,
      stderr = options.stderr !== undefined ? options.stderr : true;

    log.write(options.cssPath + '--' + options.cssDest);

    if (!options.cssPath) {
      log.error('cssPath option must be defined');
    }
    if (!options.cssDest) {
      log.error('cssDest option must be defined');
    }

    //Create css destination folder if it doesn't exist
    grunt.file.mkdir(options.cssDest);

    //Add optional parameters if options are not empty
    if (options.jsPath) {
      pythonCommand += ' -j ' + options.jsPath;
    }
    if (options.jsDest) {
      pythonCommand += ' -t ' + options.jsDest;
      //Create js destination folder if it doesn't exist
      grunt.file.mkdir(options.jsDest);
    }
    if (options.prefix) {
      pythonCommand += ' -p ' + options.prefix;
    }

    var childProcess = child_process.exec(format(pythonCommand, options.cssPath, options.cssDest), options.execOptions, callback);
    if (stdout) {
      childProcess.stdout.on('data', function (d) {
        log.write(d);
      });
    }
    if (stderr) {
      childProcess.stderr.on('data', function (d) {
        log.error(d);
      });
    }

    childProcess.on('exit', function (code) {
      if (exitCodes.indexOf(code) < 0) {
        log.error(format('Exited with code: %d.', code));
        return done(false);
      }
      if (code === 127) {
        throw new Error("Python does not seem to be installed");
      }
      done();
    });
  });

};
