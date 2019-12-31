//------------------------------------Convert Celsius to Fahrenheit
function convertToF(celsius) {
  var fahrenheit = celsius * (9 / 5) + 32;
  if (typeof fahrenheit !== "undefined") {
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }
}

//------------------------------------Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

//------------------------------------Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

//------------------------------------Find the Longest Word in a String
function findLongestWordLength(str) {
  var words = str.split(' ');
  var mxl = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > mxl) {
      mxl = words[i].length;
    }
  }
  
  return mxl;
}

//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------


//------------------------------------
