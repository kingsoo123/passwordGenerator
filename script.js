let password = document.getElementById('password');
password.innerHTML = '';
let rangeValue = document.getElementById('rangeValue')
rangeValue.innerHTML = 14

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
let lowerLetters = 'abcdefghiklmnopqrstuvwxyz'
let numbers = '0123456789'
let symbols = '/!@#$%^&*()_+='


function showRange(){
    let rangeLen = document.getElementById('rangeLen');
    rangeValue.innerHTML = rangeLen.value
}

function includeUppercase(){
   return upperLetters 
}

function includeLowercase(){
  return lowerLetters
}

function includeNumber(){
return numbers
}

function includeSymbol(){
  return symbols 
}

function generate(){
    let store = [];
    let getUpper;
    let getLower;
    let getNumbers;
    let getSymbols;
    let len = rangeValue.innerHTML
    genString = ''


    if(!includeSymbol()){
        getSymbols = '';
    }else{
        getSymbols = includeSymbol()
    }

    if(!includeUppercase()){
        getUpper=''
    }else{
        getUpper = includeUppercase()
    }

    if(!includeLowercase()){
        getLower=''
    }else{
        getLower = includeLowercase()
    }

    if(!includeNumber()){
        getNumbers=''
    }else{
        getNumbers = includeNumber()
    }
    
    if(rangeValue.innerHTML !== ''){
        store.push(getUpper, getLower, getNumbers, getSymbols)
        newStr = store.join('')
        
         for(let i = 0; i <= len; i++){
            let rnumber = Math.floor(Math.random() * newStr.length)
            genString += newStr.substring(rnumber, rnumber+1)
        }
        password.innerHTML = genString;
    }
  }
