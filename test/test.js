var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function(input, output, opts, done) {
    postcss([plugin(opts)]).process(input).then(function(result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function(error) {
        done(error);
    });
};

describe('postcss-flexbugs-fixes', function() {
    describe('bug #8', function() {
        describe('expands shorthand', function() {
            it('with px', function(done) {
                test('a{flex: 1 0 calc(1px);}', 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1px);}', {}, done);
            });
            it('with px-px', function(done) {
                test('a{flex: 0 1 calc(1px - 1px);}', 'a{flex-grow: 0;flex-shrink: 1;flex-basis: calc(1px - 1px);}', {}, done);
            });
            it('with vw', function(done) {
                test('a{flex: 1 0 calc(1vw);}', 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1vw);}', {}, done);
            });
            it('with vw-vw', function(done) {
                test('a{flex: 0 1 calc(1vw-1vw);}', 'a{flex-grow: 0;flex-shrink: 1;flex-basis: calc(1vw-1vw);}', {}, done);
            });
            it('with vw-px', function(done) {
                test('a{flex: 1 0 calc(1vw-1px);}', 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1vw-1px);}', {}, done);
            });
            it('with %', function(done) {
                test('a{flex: 0 1 calc(1vw);}', 'a{flex-grow: 0;flex-shrink: 1;flex-basis: calc(1vw);}', {}, done);
            });
        });
        describe('does nothing', function() {
            it('when using only first value', function(done) {
                test('a{flex: 0}', 'a{flex: 0}', {}, done);
            });
            it('when using only first and second values', function(done) {
                test('a{flex: 0 0}', 'a{flex: 0 0}', {}, done);
            });
            it('when not using calc', function(done) {
                test('a{flex: 0 0 1px}', 'a{flex: 0 0 1px}', {}, done);
            });
        });
    });
});
