const randomNumbers = [53, 16, 65, 100, 64, 83, 41, 98, 16, 93];

for(i = 0, j = randomNumbers.length - 1; i < randomNumbers.length / 2; i++){
    let holder = randomNumbers[i]
randomNumbers[i] = randomNumbers[j - i]
randomNumbers[j - i] = holder
}


console.log(randomNumbers)
 

//OR



const randomNumberss = [53, 16, 65, 100, 64, 83, 41, 98, 16, 93];
for(i = randomNumberss.length - 1; i >= 0 ; i--){
randomNumberss.push(randomNumberss[i])
}
for(i = 0; i< randomNumberss.length - 1 ; i++){
    randomNumberss.shift()
}
console.log(randomNumberss)
 