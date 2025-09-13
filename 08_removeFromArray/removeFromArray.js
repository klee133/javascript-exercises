const removeFromArray = function(arr, ...args) { 
    return arr.filter((element) => {
        for(item of args) {
            if(item === element) {  return false;  }
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
