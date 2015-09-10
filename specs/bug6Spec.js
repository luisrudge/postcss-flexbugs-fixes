var test = require('./test');

describe('bug 6', function() {
    it('Set flex-shrink to 1 by default', function(done) {
        var input = 'div{flex: 1;}';
        var output = 'div{flex: 1 1 0%;}';
        test(input, output, {}, done);
    });
    describe('does nothing', function() {
        it('when flex is set to none', function (done) {
            var css = 'div{flex: none;}';
            test(css, css, {}, done);
        });
        it('when not flex declarations', function(done) {
            var css = 'a{display: flex;}';
            test(css, css, {}, done);
        });
        it('when flex-shrink is set explicitly to zero', function(done) {
            var css = 'div{flex: 1 0 0%;}';
            test(css, css, {}, done);
        });
        it('when flex-shrink is set explicitly to non-zero value', function(done) {
            var css = 'div{flex: 1 2 0%}';
            test(css, css, {}, done);
        });
    });
});
