<<<<<<< HEAD

//it Trims & Snake_case at the same time

let str = "          Hi This is Coding Front            "
let result = ""
for (let q = 0; q < str.length; q++){
    if (str[q] !== " ") {result += str[q]}
   else if (str[q + 1] !== " " && str[q - 1] !== " ") {result += "_"}
=======
let str = "           Hi This is Coding Front              "
let result = ""
for (let q = 0; q < str.length; q++){
    if (str[q] !== " ") {result += str[q]} else if(str[q - 1] !== ' ' && str[q + 1] !== ' '){ result += '_'} 
>>>>>>> 9d777fb3111b825010b0e5ac7bc4ec867eb7d129
}
console.log(result) 