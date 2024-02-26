let result = ''
for(i = 1; i < 10; i++){
    for(j = 1; j < 11; j++){result += i + '*' + j + ':'+ i * j + '   '
    }
}
console.log(result)