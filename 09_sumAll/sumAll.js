const sumAll = function(int1, int2) {
    if(!Number.isInteger(int1) || !Number.isInteger(int2)) {  return "ERROR"  }
    if(int1 < 0 || int2 < 0) {  return "ERROR"  }
    
    const start = (int1 < int2) ? int1 : int2;
    const end = (start === int1) ? int2 : int1;
    let sum = start;

    for(let i = start + 1; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
