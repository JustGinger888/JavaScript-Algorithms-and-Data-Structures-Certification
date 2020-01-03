//-----------------------------------------------------Sum All Numbers in a Range
function sumAll(arr) {
  var maxVal = Math.max(arr[0], arr[1]);
  var minVal = Math.min(arr[0], arr[1]);
  var cnt = 0;

  for (var i = minVal; i <= maxVal; i++) {
    cnt = cnt + i;
  }
  
  return cnt;
}


//-----------------------------------------------------Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = inFirst(arr1, arr2, newArr);
  newArr = inFirst(arr2, arr1, newArr);
  return newArr;
}

function inFirst(f, s, newArr) {
  for (var i = 0; i < f.length; i++) {
    if (s.indexOf(f[i]) === -1) {
      newArr.push(f[i]);
    }
  }
  return newArr;
}


//-----------------------------------------------------Spinal Tap Case
function spinalCase(str) {
  var rx = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(rx, "-").toLowerCase();
}


//-----------------------------------------------------Pig Latin 
function translatePigLatin(str) {
  var output;
  if (str.match(/^[aeiou]/)){
    return str + "way";
  }

  const con = str.match(/^[^aeiou]+/)[0];
  output = str.substring(con.length) + con + "ay";

  return output;
}


//-----------------------------------------------------Search and Replace
function myReplace(str, before, after) {
  var index = str.indexOf(before);
  
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  str = str.replace(before, after);
  return str;
}


//-----------------------------------------------------DNA Pairing
function pairElement(str) {
  var pair = [];

  for (var i = 0; i < str.length; i++) {
    search(str[i], pair);
  }

  return pair;
}

function search(char, pair) {
  switch (char) {
    case "A":
      pair.push(["A", "T"]);
      break;
    case "T":
      pair.push(["T", "A"]);
      break;
    case "C":
      pair.push(["C", "G"]);
      break;
    case "G":
      pair.push(["G", "C"]);
      break;
  }
}


//-----------------------------------------------------Missing letters
function fearNotLetter(str) {
  var otp;
  
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      otp = String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }

  return otp;
}


//-----------------------------------------------------Sorted Union



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



