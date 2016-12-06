var postcss = require('postcss');
var expect = require('chai').expect;
var plugin = require('../');

module.exports = function(input, output, opts, done) {
    postcss([plugin(opts)]).process(input).then(function(result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        if (done) {
            done();
        }
    }).catch(function(error) {
        if (done) {
            done(error);
        }
    });
};
