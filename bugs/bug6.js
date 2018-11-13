var postcss = require('postcss');

module.exports = function(decl) {
    if (decl.prop === 'flex') {
        var list = postcss.list.space(decl.value);
        var values = list.reduce(function (obj, value, key) {
            if (/%/.test(value)) {
                obj[2] = value;
            } else {
                obj[key] = value;
            }
            return obj;
        }, ['0', '1', '0%']);
        var flexGrow = values[0];
        var flexShrink = values[1];
        var flexBasis = values[2];
        if(flexBasis === '0px' || flexBasis === '0') flexBasis = '0%';
        decl.value = flexGrow + ' ' + flexShrink + ' ' + flexBasis;
    }
};
