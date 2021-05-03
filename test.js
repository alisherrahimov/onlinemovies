const string = "qasos         kor lar";
let a = string.trim().split("");
let b = a.filter((val, index) => val !== " ");

console.log(b);
