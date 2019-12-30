function palindrome(str) {
  //Initialise Variables
  var initialString = str.replace(/\W/gi, '').toUpperCase();
  var comparisonString = reverseString(initialString);
  
  //Comparison Function to be Added
  if(){

  }
  return true;
}

     
function reverseString(str) {
    //--------------------------------Reverse String----------------------------------------
      // split() returns a new array
      var splitString = str.split(""); 
      // reverse() reverses the new array
      var reverseArray = splitString.reverse();
      // join() joins all elements of array into a string
      var joinArray = reverseArray.join("");
    //--------------------------------------------------------------------------------------
    return joinArray;
}


palindrome("eye");
let p = "eye12";
let rx = /\W/g;
console.log(p.replace(/\W/gi, '').toUpperCase());
