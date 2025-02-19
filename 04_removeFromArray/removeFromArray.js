const removeFromArray = function(array, ...args) {

    const splicedArray = array.filter(x => !args.includes(x));

    return splicedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
