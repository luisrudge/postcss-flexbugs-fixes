var test = require('./test');

describe('plugin options', function() {
    it('allows to disable bug fixes', function(done) {
        var input = 'div{flex: 1;}';
        var output = 'div{flex: 1;}';
        test(input, output, { bug4: false, bug6: false, bug8a: false }, done);
    });
});
