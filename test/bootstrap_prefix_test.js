'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.bootstrap_prefix = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  custom_options: function (test) {
    test.expect(4);

    var actual = grunt.file.read('tmp/custom_options/bootstrap.prefixed.css');
    var expected = grunt.file.read('test/expected/bootstrap.prefixed.css');
    test.equal(actual, expected, '[tmp/custom_options/bootstrap.prefixed.css] should be equal [test/expected/bootstrap.prefixed.css]');

    actual = grunt.file.read('tmp/custom_options/bootstrap.min.prefixed.css');
    expected = grunt.file.read('test/expected/bootstrap.min.prefixed.css');
    test.equal(actual, expected, '[tmp/custom_options/bootstrap.min.prefixed.css] should be equal [test/expected/bootstrap.min.prefixed.css]');

    actual = grunt.file.read('tmp/custom_options/bootstrap.prefixed.js');
    expected = grunt.file.read('test/expected/bootstrap.prefixed.js');
    test.equal(actual, expected, '[tmp/custom_options/bootstrap.prefixed.js] should be equal [test/expected/bootstrap.prefixed.js]');

    actual = grunt.file.read('tmp/custom_options/bootstrap.min.prefixed.js');
    expected = grunt.file.read('test/expected/bootstrap.min.prefixed.js');
    test.equal(actual, expected, '[tmp/custom_options/bootstrap.min.prefixed.js] should be equal [test/expected/bootstrap.min.prefixed.js]');

    test.done();
  },

  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options/bootstrap.prefixed.css');
    var expected = grunt.file.read('test/expected/bootstrap.prefixed.css');
    test.equal(actual, expected, '[tmp/default_options/bootstrap.prefixed.css] should be equal [test/expected/bootstrap.prefixed.css]');

    test.done();
  }
};
