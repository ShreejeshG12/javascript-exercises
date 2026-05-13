function repeatString(name, mul) {
    if (mul < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < mul; i++) {
        string += name
    }
    return string
}


// Do not edit below this line
module.exports = repeatString;
