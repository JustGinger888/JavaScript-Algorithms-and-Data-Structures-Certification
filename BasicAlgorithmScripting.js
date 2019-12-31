//--------------------------------------------------Convert Celsius to Fahrenheit
function convertToF(celsius) {
  var fahrenheit = celsius * (9 / 5) + 32;
  if (typeof fahrenheit !== "undefined") {
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }
}


//--------------------------------------------------Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}


//--------------------------------------------------Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}


//--------------------------------------------------Find the Longest Word in a String
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


//--------------------------------------------------Return Largest Numbers in Arrays
function largestOfFour(arr) {
  var results = [];
  
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = arr[i][0];
    
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }

    results[i] = largestNumber;
  }

  return results;
}


//--------------------------------------------------Confirm the Ending
function confirmEnding(str, target) {
  let rx = new RegExp(target + "$", "i");
  return rx.test(str);
}


//--------------------------------------------------Repeat a String
function repeatStringNumTimes(str, num) {
  var acc = "";
  
  while (num > 0) {
    acc += str;
    num--;
  }

  return acc;
}


//------------------------------------Truncate a String
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}


//------------------------------------



//------------------------------------



//------------------------------------



//------------------------------------



//------------------------------------



//------------------------------------



//------------------------------------
