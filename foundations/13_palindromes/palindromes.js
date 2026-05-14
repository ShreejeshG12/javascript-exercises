function isLetter(char) {
    let regex = /^[a-zA-Z0-9]$/;
    return regex.test(char);  
}

function palindromes(text = "") {
    let cleaned = "";
    let reversed = "";
    for (let i = 0; i < text.length; i++) {
        if (isLetter((text[i]))) {
            cleaned += text[i].toLocaleLowerCase();
        }
    }
    
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }
    

    return cleaned === reversed;
}


// Do not edit below this line
module.exports = palindromes;
