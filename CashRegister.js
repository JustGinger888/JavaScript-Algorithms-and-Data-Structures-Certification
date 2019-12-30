var denom = [
  { n: "ONE HUNDRED", v: 100.0 },
  { n: "TWENTY", v: 20.0 },
  { n: "TEN", v: 10.0 },
  { n: "FIVE", v: 5.0 },
  { n: "ONE", v: 1.0 },
  { n: "QUARTER", v: 0.25 },
  { n: "DIME", v: 0.1 },
  { n: "NICKEL", v: 0.05 },
  { n: "PENNY", v: 0.01 }];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var status;
  var output = {status: null, change: []};

  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    }, 
    { total: 0 }
    );

  // Here is your change, ma'am.
  return output;
}

function statusOpt(){
  return "INSUFFICIENT_FUNDS"
  return "CLOSED";
  return "OPEN";
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
                             ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
