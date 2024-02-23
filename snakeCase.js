
//it Trims & Snake_case at the same time

let str = "           Hi This is Coding Front              "
let result = ""
for (let q = 0; q < str.length; q++){
    if (str[q] !== " ") {result += str[q]} else if(str[q - 1] !== ' ' && str[q + 1] !== ' '){ result += '_'} 
}
console.log(result) 

