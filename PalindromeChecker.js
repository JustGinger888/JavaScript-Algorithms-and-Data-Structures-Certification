function palindrome(str) {
  //Initialise Variables
  var initialString = str.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
  var comparisonString = reverseString(initialString);
  
  //Comparison Function between Strings
  if(compareStrings(initialString,comparisonString)){
      return true;
  }
  return false;
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
  
function compareStrings(str,cmp){
    if(str === cmp){
      return true;
    }
    return false;
}


palindrome("eye");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("My age is 0, 0 si ega ym.");
palindrome("five|\_/|four");
