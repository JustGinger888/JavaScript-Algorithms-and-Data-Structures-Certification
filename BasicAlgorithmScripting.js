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


//------------------------------------Finders Keepers
function findElement(arr, func) {
  return arr.find(func);
}


//------------------------------------Boo who
function booWho(bool) {
  return typeof bool === "boolean";
}


//------------------------------------Title Case a Sentence
function titleCase(str) {
  let rx = /(^|\s)\S/g
  let l = L => L.toUpperCase();
  return str.toLowerCase().replace(rx, l);
}


//------------------------------------Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let tstArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    tstArr.splice(n, 0, arr1[i]);
    n++;
  }
  return tstArr;
}


//------------------------------------Falsy Bouncer
function bouncer(arr) {
  return arr.filter(Boolean);
}


//------------------------------------Where do I Belong
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}


//------------------------------------Mutations
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  
  return true;
}


//------------------------------------Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var tstArr = [];
  while (arr.length) {
    tstArr.push(arr.splice(0, size));
  }
  return tstArr;
}
