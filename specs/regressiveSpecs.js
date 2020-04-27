var test = require('./test');

describe('regressive tests', function () {
  it('https://github.com/luisrudge/postcss-flexbugs-fixes/issues/68', function (done) {
    var input = 'div{flex: 1 0 calc(30% - (30px / 3));}';
    var output = 'div{flex-grow: 1;flex-shrink: 0;flex-basis: calc(30% - (30px / 3));}';
    test(input, output, {}, done);
  });
});
