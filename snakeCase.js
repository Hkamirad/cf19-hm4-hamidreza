let str = "Hi This is Coding Front"
let result = ""
for (let q = 0; q < str.length; q++){
    if (str[q] === " ") {result += "_"} else { result += str[q]} 
}
console.log(result)