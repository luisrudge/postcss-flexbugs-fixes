var test = require('./test');

describe('bug 4', function() {
    it('set 0% for default flex-basis and 1 for flex-shrink in flex shorthand', function(done) {
        var input = 'div{flex: 1;}';
        var output = 'div{flex: 1 1 0%;}';
        test(input, output, {}, done);
    });
    it('set 0% for default flex-basis when not specified', function(done) {
        var input = 'div{flex: 1 1;}';
        var output = 'div{flex: 1 1 0%;}';
        test(input, output, {}, done);
    });
    it('set flex-basis === 0% for flex-basis with plain 0', function(done) {
        var input = 'div{flex: 1 0 0;}';
        var output = 'div{flex: 1 0 0%;}';
        test(input, output, {}, done);
    });
    it('set flex-basis === 0% for flex-basis with 0px', function(done) {
        var input = 'div{flex: 1 0 0px;}';
        var output = 'div{flex: 1 0 0%;}';
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
        it('doen not change auto flex-basis is set explicitly', function(done) {
            var css = 'div{flex: 1 1 auto;}';
            test(css, css, {}, done);
        });
    });
});
