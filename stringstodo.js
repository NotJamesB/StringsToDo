function removeBlanks(str) {
    let newStr = ""
    for(let char in str ){
        if(str[char] != " ") {
            newStr += str[char]
        }
    }
    return newStr;
}

console.log(removeBlanks("  the r e is n o  spa c e"))


function getDigits(str){
    let newNumStr = ''
    for (let char in str) {
        if(!isNaN(str[char])){
            newNumStr += str[char]
        }
    }
    return Number(newNumStr);
}

function acronym(str) {
    let wordsArr = str.split(' ');
    let acronymStr = ''

    for(let word in wordsArr){
        if(wordsArr[word].length > 0){
            acronymStr += wordsArr[word][0].toUppercase()
        }
    }
    return acronymStr
}


