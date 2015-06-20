var test = require('./test');

describe('bug 7', function() {
    it('replace flex-basis to auto and add width', function(done) {
        var input = 'div{flex: 0 0 100%;box-sizing: border-box;}';
        var output = 'div{flex: 0 0 auto;width: 100%;box-sizing: border-box;}';
        test(input, output, {}, done);
    });
    describe('does nothing', function() {
        it('when not using box-sizing', function(done) {
            var input = 'div{flex: 0 0 100%;}';
            var output = 'div{flex: 0 0 100%;}';
            test(input, output, {}, done);
        });
        it('when not box-sizing: border-box', function(done) {
            var input = 'div{box-sizing: content-box;}';
            var output = 'div{box-sizing: content-box;}';
            test(input, output, {}, done);
        });
        it('when not using %', function(done) {
            var input = 'div{flex: 0 0 100px;box-sizing: border-box;}';
            var output = 'div{flex: 0 0 100px;box-sizing: border-box;}';
            test(input, output, {}, done);
        });
    });
});
