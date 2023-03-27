'use strict'
for (let i = 20; i >= 11 ;  i--) {
    if(i == 13){
        break;
    };
    console.log(i);
}

//let i = 2;
while (i <= 15) {
    ++i
    if (i % 2 === 0) {
        continue;
    } else {
         console.log(i) ;   
    }
     
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const arrayOfNumbers = [];

     for (let i = 0; i <= 5; i++) {
        for (let y = 5; y <= 10; y++) {
            arrayOfNumbers[i]=y;
            i++;
            
        }
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;

    
    // let result = '';
    // let lines = 5;
    let z = "     ";

     for (let i = "*"; lines != 0; i =i + "**", lines-- ) {
        result = z + i + "\n";
        console.log(result);
     }

    console.log(lines);

    //const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i <= data.length - 1; i++) {
        console.log(typeof(data[i]));
        // if (typeof(data[i]) == "number") {
            
        //     data[i] = data[i] * 2;
        // } else { data[i] = data[i] + "- done";}

    }

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];
    // for (let i = data.length - 1, y = 0; i => 0; y++, i--) {
    //     data[i] = result[y];
    // }
    // // Не трогаем
    // return result;


    // const lines = 5;
    // let result = '';
    /*
    let n = 0;
    for (let i = 1; i <=6; i++){
        for(let y = 5 - n; y > 0 ; y--){
            result+="/";
        }
        n++;
        
        for (let k = 0; k<= (i-1)*2; k++){
            result+="*";
        }
        result+="\n";
    }
    console.log(result);
    
    const lines = 5;
    let result = '';
    for (let i = 0; i < lines; i++){
        for(let j = lines - i; j > 0 ; j--){
            result+=" ";
        }
        
        for (let k = 0; k < i*2+1; k++){
            result+="*";
        }
        result+="\n";
    }
    console.log(result);

    NASTYA 
    function getMathResult(baseNum, repeatNum) {
        if(repeatNum > 0 && typeof(repeatNum) == "number"){
            let resStr = "";
            for (let i = 1; i <= repeatNum; i++) {
                if (i == repeatNum){
                    resStr+=baseNum*i; 
                } else {
                    resStr+=baseNum*i + "---";
                }
                
            }
             return resStr;
        } else {
            return baseNum;
        }  
    }

    console.log(getMathResult(5, 3));

function returnNeighboringNumbers(num) {
    let min=num-1;
    let max=num+1;
    return [min , num , max];
}

console.log(returnNeighboringNumbers(5));

function sayHello(name) {
    return `Привет, ${name}!`;
} 
END NASTYA

function returnNeighboringNumbers(number) {

    return [--number, ++number, ++number];
}

console.log(returnNeighboringNumbers(5))



function getMathResult(number, quantity) {
    let subsequence = "";
    if (typeof(quantity) === "number" && quantity != 0 && quantity > 0) {
        for (i = 1; i <= quantity; i++) {
            if (i == quantity) {
                subsequence += number * i ;    
            } else {subsequence += number * i + "---";}     
        }
        return subsequence;
    } else { return number}
}

console.log(getMathResult(5,3));
*/
/**DANILA */
function calculateVolumeAndArea(number) {
    if (number !== '' && number > 0 && Number.isInteger(number)) {
        let V = number * number * number;
        let S = 6 * number * number;
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    } else {
        return "При вычислении произошла ошибка";}
}

// Место для второй задачи
function getCoupeNumber(place) {
    if (place > 0 && place < 37 && Number.isInteger(place) && place !== "") {
        let carriage = Math.ceil(place / 4);
        return carriage;
    } else if (place == 0 || place > 36) { 
        return "Таких мест в вагоне не существует";}
    else{
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}

/*NASTYA
// Место для первой задачи
function calculateVolumeAndArea(ribLength) {
    if (Number.isInteger(ribLength) && ribLength > 0 && typeof (ribLength) == 'number'){
        let volume = ribLength*ribLength*ribLength;
        let area = ribLength*ribLength*6;
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return "При вычислении произошла ошибка";
    }
}

// Место для второй задачи
function getCoupeNumber(place) {
    if (typeof (place) !== 'number' || place < 0 || !Number.isInteger(place)){
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (place === 0 || place > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(place/4);
    }
}

*/

/**  DANILA
function findMaxNumber(a,b,c,d) {
    if (a !== '' && a >= 0 && b !== '' && b >= 0 && c !== '' && c >= 0 && d !== '' && d >= 0 && typeof(a) == "number" && typeof(b) == "number" && typeof(c) == "number" && typeof(d) == "number") {
        let max = a;
        if (max < b){
            max = b;
        } 
        if (max < c){
            max = c;
        } 
        if (max < d){
            max = d;
        }
        return max;
    } else {
        return 0;
    }
}

console.log(findMaxNumber(1,5,6.6,11));



function fib(number) {
    let a = [0,1];
    if (number > 1 && typeof(number) == "number" && number !== '' && Number.isInteger(number)) {
        for (let i = 2 ; i < number; i++){
            a[i] = a[i-2] + a[i-1];
        } return a.join(" ");
    } else if (number == 1){
        return "0";
    } else {
        return "";
    }
}
*/
/** NASTYA
function findMaxNumber(a, b, c, d) {
    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number'){
        return `${a} , ${b} , ${c} , ${d}`;
    }
}
console.log(findMaxNumber(1,5,4));

function fib(num) {
    if (typeof(num) != 'number' || !Number.isInteger(num) || num <= 0){
        return "";
    } else {
        if (num == 1){
            return '0';
        } else {
            let arr = [0, 1];
            for (let i = 1; i < num; i++) {
                arr[i+1] = arr[i-1] + arr[i];
            }
            return arr.join(" ");
        }
    }
}

console.log(fib(7));*/
/** NASTYA
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        const {age} = obj;
        const {languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: ` ;
        for (let key in languages){
            str+=`${languages[key].toUpperCase()} `;
        }
        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills
    return exp;
}

console.log(showExperience(personalPlanPeter));
 

function showProgrammingLangs(plan) {
    let result = "";
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs){
        result+=`Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
*/

/** DANILA
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        const last = languages.join(" ");
        const lang = last.toUpperCase();
        return `Мне ${age} и я владею языками: ${lang}`;
        
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let arrChange = [];
    for (let i = 0; i < arr.length  ; i++) {
        arrChange[i] = arr[i].toLowerCase();
        console.log(arrChange[i])
    }
}

console.log(standardizeStrings(favoriteCities));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let string = arr.join();
    let words = string.toLowerCase()
    for (let i = 0; i < arr.length ; i++) {
        words = words.replace("," , "\n");
    } return words;
}


const baseCurrencies = ['USD', 'EUR','UAH', 'RUB', 'CNY'];
const additionalCurrencies = ['USD'];

function availableCurr(arr, missingCurr) {
    let str = 'Нет доступных валют';
    if ( arr.length !== 0) {
        str ='Доступные валюты:\n';
        for(let key of arr){
            if(key!= missingCurr){
                str += `${key}\n`;
            }
        } return str } else {
        return str;
    }     
}

console.log(availableCurr(baseCurrencies, additionalCurrencies))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length !== 0){
        console.log(missingCurr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == missingCurr){
                delete arr[i];
                arr[i] = arr[i+1];
            } 
        } 
        let words = arr.join();
        for (let y = 0; y < arr.length; y++){
            words = words.replace("," , "\n");
        }
        if (typeof(missingCurr) == "undefined"){
        return "Доступные валюты:" + "\n" + words + "\n"
        } else {
            return "Доступные валюты:" + "\n" + words
        }
    } else { 
        return "Нет доступных валют"
    }
}

console.log(availableCurr(baseCurrencies, additionalCurrencies))
*/

/**NASTYA 
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let res ="Семья состоит из: ";
    if (arr.length === 0){
        return 'Семья пуста';
    } else {
        for(let key of arr){
            res+=`${key} `;
        }
        return res;
    }
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].toLowerCase());
    }
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    const arr = Array.from(str);
    return arr.reverse().join('');
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let resStr = '';
    arr.length === 0 ? resStr = 'Нет доступных валют': resStr = 'Доступные валюты:\n'
    const result = arr.filter(a => a != missingCurr);
    for (let key of result){
        resStr += `${key}\n`
    } 
    return resStr;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));*/

