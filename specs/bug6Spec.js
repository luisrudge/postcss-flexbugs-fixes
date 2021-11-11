var test = require('./test');

describe('bug 6', function() {
  it('Set flex-shrink to 1 by default', function(done) {
    var input = 'div{flex: 1;}';
    var output = 'div{flex: 1 1;}';
    test(input, output, {}, done);
  });
  describe('does nothing', function() {
    it('when flexBasis has operator wrapped by space if syntax is less', function(done) {
      var less ='@vm:10px; .test{flex: 0 1 21 * @vm }'
      test(less, less, {}, done, require('postcss-less'));
    });
    it('when flexBasis has operator wrapped by space if syntax is scss', function(done) {
      var scss ='$vm:10px; .test{flex: 0 1 21 / $vm }'
      test(scss, scss, {}, done, require('postcss-scss'));
    });
    it('when flex is set to none', function(done) {
      var css = 'div{flex: none;}';
      test(css, css, {}, done);
    });
    it('when not flex declarations', function(done) {
      var css = 'a{display: flex;}';
      test(css, css, {}, done);
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
    describe('when flex value is reserved word', function() {
      var stringValues = [
        'none',
        'auto',
        'content',
        'inherit',
        'initial',
        'unset'
      ];
      stringValues.forEach(function(s) {
        it(s, function(done) {
          var input = 'div{flex: ' + s + ';}';
          test(input, input, {}, done);
        });
      });

      it('is a custom property', function(done) {
        var input = 'div{flex: var(--foo);}';
        test(input, input, {}, done);
      });
    });
  });
});
