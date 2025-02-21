const leapYears = function(year) {

     let leapYearTest = year % 4;
     let leapYearTest100 = year % 100;
     let leapYearTest400 = year % 400;
    if (leapYearTest === 0 && leapYearTest100 !== 0 || leapYearTest400 ===0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
