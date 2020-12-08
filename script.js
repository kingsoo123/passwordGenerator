let password = document.getElementById('password');
password.innerHTML = '';
let rangeValue = document.getElementById('rangeValue')
rangeValue.innerHTML = ''

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
let lowerLetters = 'abcdefghiklmnopqrstuvwxyz'
let numbers = '0123456789'
let symbols = '/!@#$%^&*()_+='


function showRange(){
    let rangeLen = document.getElementById('rangeLen');
    rangeValue.innerHTML = rangeLen.value
}




function includeUppercase(){
    let uppercase = document.getElementById('uppercase')
    let len = upperLetters.length;
    let genString = '';

    if(uppercase.checked){
        for(let i = 0; i <= len; i++){
            let rnumber = Math.floor(Math.random() * len)
            genString += upperLetters.substring(rnumber, rnumber+1)
        }
       return genString; 
    }else{
        console.log('no');
    }  
}

function includeLowercase(){
    let lowercase = document.getElementById('lowercase')
    let len = lowerLetters.length;
    let genString = '';

    if(lowercase.checked){
        for(let i = 0; i <= len; i++){
            let rnumber = Math.floor(Math.random() * len)
            genString += lowerLetters.substring(rnumber, rnumber+1)
        }
       return genString; 
    }else{
        console.log('no');
    } 
}

function includeNumber(){
    let numbersDiv = document.getElementById('numbers')
    let len = numbers.length;
    let genString = '';

    if(numbersDiv.checked){
        for(let i = 0; i <= len; i++){
            let rnumber = Math.floor(Math.random() * len)
            genString += numbers.substring(rnumber, rnumber+1)
        }
       return genString; 
    }else{
        console.log('no');
    } 
}

function includeSymbol(){
    let symbolDiv = document.getElementById('symbol')
    let len = symbols.length;
    let genString = '';

    if(symbolDiv.checked){
        for(let i = 0; i <= len; i++){
            let rnumber = Math.floor(Math.random() * len)
            genString += symbols.substring(rnumber, rnumber+1)
        }
       return genString; 
    }else{
        console.log('no');
    } 
}

function generate(){
    let store = [];
    let getUpper;
    let getLower;
    let getNumbers;
    let getSymbols;

    
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
        console.log(store);
    }
  }