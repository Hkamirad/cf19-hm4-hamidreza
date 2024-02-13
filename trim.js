let str = "          Hi This is Coding Front           "
let q = 0
let result = ""

while (q < str.length){
    if (str[q] !== " ") {result += str[q]}
   else if (str[q + 1] !== " " && str[q - 1] !== " ") {result += " "}
   q++ 
}
console.log(result)