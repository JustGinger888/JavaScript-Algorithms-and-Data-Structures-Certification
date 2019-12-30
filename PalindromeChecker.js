function palindrome(str) {
  str.replace(/\W/gi, '').toUpperCase();
  return true;
}



palindrome("eye");
let p = "eye12";
let rx = /\W/g;
console.log(p.replace(/\W/gi, '').toUpperCase());
