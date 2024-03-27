const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const lowerSet = upperSet.toLowerCase();
const digitSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"
const containsAll = upperSet + lowerSet + digitSet + symbolSet;

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");


// method to generate random index value from given sets
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

// function to generate random data from given dataSets
const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(digitSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    // calling function recursively 
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    passBox.innerText = truncateString(password,totalChar.value);
}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)

// to trim the extra character printed 
function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}


