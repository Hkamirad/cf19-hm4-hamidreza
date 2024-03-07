const result = [];
for (let i = 1; i <= 8; i++) {
  let holder = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      holder += " ";
    } else {
      holder += "#";
    }
  }
  result.push(holder);
}
console.log(result);
