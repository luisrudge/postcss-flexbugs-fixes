var test = require('./test');

describe('bug 3', function() {
    it('replaces minHeight with height when no height is set', function(done) {
        var input = 'div{display: flex;min-height: 50vh;}';
        var output = 'div{display: flex;height: 50vh;}';
        test(input, output, {}, done);
    });
    describe('does nothing', function() {
        it('when not display: flex', function(done) {
            var css = 'a{flex: 0;}';
            test(css, css, {}, done);
        });
        it('when no min-height is set', function(done) {
            var css = 'div{display: flex;}';
            test(css, css, {}, done);
        });
        it('when height is set', function(done) {
            var css = 'div{display: flex; height: 100vh; min-height: 50vh;}';
            test(css, css, {}, done);
        });
    });
});
