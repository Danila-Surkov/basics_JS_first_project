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