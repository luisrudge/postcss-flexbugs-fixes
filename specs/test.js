var postcss = require('postcss');
var expect = require('chai').expect;
var plugin = require('../');

module.exports = function(input, output, opts, done, syntax) {
  postcss([plugin(opts)])
    .process(input, {from: undefined, syntax: syntax || undefined})
    .then(function(result) {
      expect(result.css).to.eql(output);
      expect(result.warnings()).to.be.empty;
      if (done) {
        done();
      }
    })
    .catch(function(error) {
      if (done) {
        done(error);
      }
    });
};
