module.exports = function(decl) {
    if (decl.prop === 'flex') {
        if(decl.value === 'none'){
            decl.value = '0 0 auto';
        }
    }
};
