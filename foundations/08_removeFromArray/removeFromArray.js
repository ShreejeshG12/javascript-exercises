function removeFromArray(array = [], char = "") {
    
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != char) {
            newArray.push(array[i])
        }
        
    }
    console.log(newArray)
}


// Do not edit below this line
module.exports = removeFromArray;
