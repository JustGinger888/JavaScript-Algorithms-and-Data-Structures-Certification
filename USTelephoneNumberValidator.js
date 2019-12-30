function telephoneCheck(str) {
  let rx = /^([1]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
  if(rx.test(str)){
    return true;
  }
  else{
    return false;
  }
}

telephoneCheck("555-555-5555");
