function convertToRoman(num) {
 var optArr = [];
 var tblCheck = eqvArr.length - 1; 

 do{
     if (num - eqvArr[tblCheck][0] >= 0){
        num = num - eqvArr[tblCheck][0];
        optArr.push(eqvArr[tblCheck][1]);
        //break;
     }
     else{
         tblCheck--;
     }

 }while(num > 0);
 
 var output = optArr.join("");
 return output;
}

const eqvArr= [[1,"I"], [4,"IV"], [5,"V"], [9,"IX"], [10,"X"], [40,"XL"], [50,"L"], 
               [90,"XC"], [100,"C"], [400,"CD"], [500,"D"], [900,"CM"], [1000,"M"]];

console.log(convertToRoman(14));

/*------------------------------------Decimal Table--------------------------------------
Decimal value (v)	 | Roman numeral (n)
1	                 | I
4	                 | IV
5	                 | V
9	                 | IX
10	                 | X
40	                 | XL
50	                 | L
90	                 | XC 
100	                 | C
400	                 | CD
500	                 | D
900	                 | CM
1000	                 | M

let x = value
let v = Highest dec eqv

x = x - v UNTIL x = 0

OUTUT n
--------------------------------------Decimal Table--------------------------------------
*/
