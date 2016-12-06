var test = require('./test');

describe('bug 8.1.a', function() {
    it('Expands the shorthand when calc() is used', function(done) {
        var input = 'a{flex: 1 0 calc(1vw - 1px);}';
        var output = 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1vw - 1px);}';
        test(input, output, {}, done);
    });
    describe('does nothing', function() {
        it('when using only first value', function(done) {
            var input = 'a{flex: 0}';
            var output = 'a{flex: 0 1 0%}';
            test(input, output, {}, done);
        });
        it('when using only first and second values', function(done) {
            var input = 'a{flex: 0 0}';
            var output = 'a{flex: 0 0 0%}';
            test(input, output, {}, done);
        });
        it('when not using calc', function(done) {
            var css = 'a{flex: 0 0 1px}';
            test(css, css, {}, done);
        });
        describe('when flex value is reserved word', function() {
            var stringValues = ['none', 'auto', 'content', 'inherit', 'initial', 'unset'];
            stringValues.forEach(function(s) {
                it(s, function(done) {
                    var input = 'div{flex: ' + s + ';}';
                    test(input, input, {}, done);
                });
            });
        });
    });
});
