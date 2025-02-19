const removeFromArray = function(array, spliceElem) {

    const splicedArray = array.toSpliced(spliceElem - 1, 1);

    return splicedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
