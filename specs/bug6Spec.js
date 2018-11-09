var test = require('./test');

describe('bug 6', function() {
    it('Fix value when `flex:initial`', function(done) {
        var input = 'div{flex: initial;}';
        var output = 'div{flex: 0 1 auto;}';
        test(input, output, {}, done);
    });
    it('Fix value when `flex:auto`', function(done) {
        var input = 'div{flex: auto;}';
        var output = 'div{flex: 1 1 auto;}';
        test(input, output, {}, done);
    });
    it('Fix value when `flex:1`', function(done) {
        var input = 'div{flex: 1;}';
        var output = 'div{flex: 1 1;}';
        test(input, output, {}, done);
    });
    it('Set flex-shrink to 1 by default', function(done) {
        var input = 'div{flex: 1;}';
        var output = 'div{flex: 1 1;}';
        test(input, output, {}, done);
    });
    it('when flex-shrink is set explicitly to zero', function(done) {
        var css = 'div{flex: 1 0 0%;}';
        var output = 'div{flex: 1 0;}';
        test(css, output, {}, done);
    });
    it('when flex-shrink is set explicitly to non-zero value', function(done) {
        var css = 'div{flex: 1 2 0%}';
        var output = 'div{flex: 1 2}';
        test(css, output, {}, done);
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
        describe('when flex value is reserved word', function() {
            var stringValues = ['none', 'content', 'inherit', 'unset'];
            stringValues.forEach(function(s) {
                it(s, function(done) {
                    var input = 'div{flex: ' + s + ';}';
                    test(input, input, {}, done);
                });
            });
        });
    });
});
