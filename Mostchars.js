//1-Without Object

const word = "hi! this is coding font";
const chars = [];
const countchars = [];
const mostchars = [];
for (i = 0, j = 0; i < word.length; i++) {
  if (!chars.includes(word[i]) && word[i] !== " ") {
    chars.push(word[i]);
  }
}
for (i = 0; i < chars.length; i++) {
  let cnt = 0;
  for (j = 0; j < word.length; j++) {
    if (chars[i] === word[j]) {
      cnt = cnt + 1;
    }
  }
  if (cnt !== 0) {
    countchars.push(cnt);
  }
}
let most = [];
let max = countchars[0];
for (i = 0; i < countchars.length; i++) {
  if (countchars[i] >= max) {
    (max = countchars[i]), (most = countchars.indexOf(countchars[i]));
  }
}
mostchars.push(chars[most]);

//console.log(chars)
//console.log(countchars)
console.log(mostchars,':', max);

//OR 2-With Object

const texttt = "hi this is coding front";
const charss = texttt.split("");
let charscount = {};

for (i = 0; i < charss.length; i++) {
  if (charscount[charss[i]]) {
    charscount[charss[i]] += 1;
  } else if (charss[i] !== " ") {
    charscount[charss[i]] = 1;
  }
}
let mostcharscount = -1;
let mostcharss = "";
for (key in charscount) {
  if (charscount[key] > mostcharscount) {
    (mostcharscount = charscount[key]), (mostcharss = key);
  }
}

console.log(mostcharss, ":", mostcharscount);
