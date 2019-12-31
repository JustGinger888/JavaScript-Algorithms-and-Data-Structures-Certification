var change;

var currencyEQV = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var output = { registerStatus: null, change: [] };
    change = cash - price;
  
    var register = cid.reduce(
      function(a, c) {
        a.total += c[1];
        a[c[0]] = c[1];
        return a;
      }, { total: 0 }
    );
  
    return calculateOutput(register, output, cid);
}

function calculateOutput(register, output, cid){
    if (register.total === change) {
        output.registerStatus = "CLOSED";
        output.change = cid;
        return output;
    }

    if (register.total < change) {
        output.registerStatus = "INSUFFICIENT_FUNDS";
        return output;
    }

    var changeArray = createChangeArray(register);

    if (changeArray.length < 1 || change > 0) {
        output.registerStatus = "INSUFFICIENT_FUNDS";
        return output;
    }
    
    else{
        output.registerStatus = "OPEN";
        output.change = changeArray;
        return output;
    }
}

function createChangeArray(register){ 
  var tmpArr = currencyEQV.reduce(
        function(a, c) {
            var value = 0;
            while (register[c.name] > 0 && change >= c.val) {
                change -= c.val;
                register[c.name] -= c.val;
                value += c.val;
                change = Math.round(change * 100) / 100;
            }
            
            if (value > 0) {
                a.push([c.name, value]);
            }
            return a;
        }, []
    );

  return tmpArr;
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
                             ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
