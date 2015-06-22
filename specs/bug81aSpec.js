var test = require('./test');

describe('bug 8.1.a', function() {
    describe('expands shorthand', function() {
        it('with px', function(done) {
            var input = 'a{flex: 1 0 calc(1px);}';
            var output = 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1px);}';
            test(input, output, {}, done);
        });
        it('with px-px', function(done) {
            var input = 'a{flex: 0 1 calc(1px - 1px);}';
            var output = 'a{flex-grow: 0;flex-shrink: 1;flex-basis: calc(1px - 1px);}';
            test(input, output, {}, done);
        });
        it('with vw', function(done) {
            var input = 'a{flex: 1 0 calc(1vw);}';
            var output = 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1vw);}';
            test(input, output, {}, done);
        });
        it('with vw-vw', function(done) {
            var input = 'a{flex: 0 1 calc(1vw-1vw);}';
            var output = 'a{flex-grow: 0;flex-shrink: 1;flex-basis: calc(1vw-1vw);}';
            test(input, output, {}, done);
        });
        it('with vw-px', function(done) {
            var input = 'a{flex: 1 0 calc(1vw-1px);}';
            var output = 'a{flex-grow: 1;flex-shrink: 0;flex-basis: calc(1vw-1px);}';
            test(input, output, {}, done);
        });
        it('with %', function(done) {
            var input = 'a{flex: 0 1 calc(1vw);}';
            var output = 'a{flex-grow: 0;flex-shrink: 1;flex-basis: calc(1vw);}';
            test(input, output, {}, done);
        });
    });
    describe('does nothing', function() {
        it('when using only first value', function(done) {
            var input = 'a{flex: 0}';
            var output = 'a{flex: 0 1 auto}';
            test(input, output, {}, done);
        });
        it('when using only first and second values', function(done) {
            var input = 'a{flex: 0 0}';
            var output = 'a{flex: 0 0 auto}';
            test(input, output, {}, done);
        });
        it('when not using calc', function(done) {
            var css = 'a{flex: 0 0 1px}';
            test(css, css, {}, done);
        });
    });
});
