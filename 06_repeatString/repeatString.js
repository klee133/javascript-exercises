const repeatString = function(string, num) {
    if(num < 0) return "Number has to be higher than 0";
    let ans = '';
    for(let i = num; i > 0; i--) {
        ans += string;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
