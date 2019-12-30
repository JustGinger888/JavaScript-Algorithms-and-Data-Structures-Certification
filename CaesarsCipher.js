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

  var output = optArr.join();
  return output;
}

function conversion(str){
    var initialASCII = str.charCodeAt(0);
    
    for(var i = 0; i <= 13; i++){
      initialASCII++;
      if(initialASCII == 91){
        initialASCII = 65;
      }
    }

    var convertedASCII = String.fromCharCode(initialASCII);
    return convertedASCII; 
}

// Change the inputs below to test
rot13("LBH QVQ VG");
console.log();
