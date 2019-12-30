function rot13(str) { // LBH QVQ VG!
  var splitString = str.split(""); 
  var optArr = [];
  
  for (var i = 0; i < splitString.length; i++){
      if(rx.test(splitString[i])){
        optArr[i] = conversion(splitString[i]);
      }
      else{
        optArr[i] = splitString[i];
      }
  }

  var output;
  return output;
}

function conversion(str){

}

let rx = /[A-Za-z]/
console.log();

// Change the inputs below to test
rot13("LBH QVQ VG");
