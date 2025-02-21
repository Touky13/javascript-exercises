const sumAll = function(startInt, endInt) {

    if (startInt > endInt){
        let minTemp = Math.min(startInt, endInt);
        let maxTemp = Math.max (startInt, endInt);
        startInt = minTemp;
        endInt = maxTemp;
    } else if (startInt < 0 || !Number.isInteger(startInt) || endInt < 0 || !Number.isInteger(endInt)){
        return "ERROR";
    }

    let result = 0;
    for (let i = startInt; i <= endInt; i++) {
        result += i
    }
    return result;
      
};

// Do not edit below this line
module.exports = sumAll;
