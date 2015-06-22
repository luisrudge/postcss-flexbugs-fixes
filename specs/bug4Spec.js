var test = require('./test');

describe('bug 4', function() {
    it('flex shorthand declarations with unitless flex-basis values are ignored', function(done) {
        var input = 'div{flex: 1;}';
        var output = 'div{flex: 1 1 0%;}';
        test(input, output, {}, done);
    });
    it('when flex-basis with 0 pixels is set', function(done) {
        var input = 'div{flex: 1 0 0 px;}';
        var output = 'div{flex: 1 0 0%;}';
        test(input, output, {}, done);
    });
    it('when flex-basis is set and have flex-shrink', function(done) {
        var input = 'div{flex: 1 1;}';
        var output = 'div{flex: 1 1 0%;}';
        test(input, output, {}, done);
    });
    describe('does nothing', function() {
        it('when not flex declarations', function(done) {
            var css = 'a{display: flex;}';
            test(css, css, {}, done);
        });
        it('when flex-basis with percent is set', function(done) {
            var css = 'div{flex: 1 0 0%;}';
            test(css, css, {}, done);
        });
        it('when flex-basis with pixels is set', function(done) {
            var css = 'div{flex: 1 0 10px;}';
            test(css, css, {}, done);
        });
    });
});
