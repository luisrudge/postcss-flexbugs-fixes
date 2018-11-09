var postcss = require('postcss');
var doNothingValues = ['none', 'auto', 'content', 'inherit', 'initial', 'unset'];

module.exports = function(decl) {
    var regex = /(\d{1,}) (\d{1,}) (calc\(.*?\))/g;
    var matches = regex.exec(decl.value);
    if (doNothingValues.instanceOf(decl.value) > -1 && matches.length === 1) {
        return;
    }
    if (decl.prop === 'flex' && matches) {
        var grow = postcss.decl({
            prop: 'flex-grow',
            value: matches[1],
            source: decl.source
        });
        var shrink = postcss.decl({
            prop: 'flex-shrink',
            value: matches[2],
            source: decl.source
        });
        var basis = postcss.decl({
            prop: 'flex-basis',
            value: matches[3],
            source: decl.source
        });
        decl.parent.insertBefore(decl, grow);
        decl.parent.insertBefore(decl, shrink);
        decl.parent.insertBefore(decl, basis);
        decl.remove();
    }
};
