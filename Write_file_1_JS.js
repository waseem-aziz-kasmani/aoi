function PriceUpdate_1(){
document.getElementById("Var1").value=350;//OIL PRICE 
document.getElementById("Var2").value=150;//FATTY ACID PRICE
document.getElementById("Var3").value=150;//ACID OIL PRICE
document.getElementById("Var4").value=10000;//WEIGHT CONSUMED DEFAULT
document.getElementById("Var6").value=9500;//WEIGHT RECEIVED DEFAULT
document.getElementById("Var10").value=0;//WAX OIL  RECOVERED DEFAULT
document.getElementById("Var12").value=100;//FATTY OIL  RECOVERED DEFAULT
document.getElementById("Var14").value=200;//ACID OIL  RECOVERED DEFAULT
document.getElementById("Var21").value=4000;//CHEMICAL USAGE DEFAULT
document.getElementById("Var24").value=23000;//UTILITY USAGE DEFAULT
}
function CostCalculate_1(){
 document.getElementById("Var1").innerHTML=350;
let a = document.getElementById("Var1").value;//OIL PRICE 
let b = document.getElementById("Var2").value;//FATTY ACID PRICE
let c = document.getElementById("Var3").value;//ACID OIL PRICE

let d = document.getElementById("Var4").value;//OIL CONSUMED
let e = document.getElementById("Var5").value;//AMOUNT
let f = document.getElementById("Var6").value;//OIL RECEIVED
let g = document.getElementById("Var7").value;//AMOUNT   
let h = document.getElementById("Var8").value;//OIL LOSSES

 
let k = document.getElementById("Var10").value;//WAX RECOVERY

let m = document.getElementById("Var12").value;//FATTY ACID RECOVERY

let o = document.getElementById("Var14").value;//ACID OIL RECOVERY

document.getElementById("Var5").value =a*d  ;//OIL CONSUMED VALUE
document.getElementById("Var7").value =a*f  ;//OIL RECEIVED VALUE

let i=d-f;//LOSSES WEIGHT
document.getElementById("Var8").value = i + " Kg (" + i*100/d + "%)"  ;//LOSSES WEIGHT

document.getElementById("Var9").value = i*a +"PKR" ;//LOSSES VALUE
let l=  k * b;
document.getElementById("Var11").value = l; //WAX RECOVERY amount
let n= m * b;
document.getElementById("Var13").value = n //Fatty Acid RECOVERY amount
let p= o * c;
document.getElementById("Var15").value = p; //Acid Oil RECOVERY amount
let t1 = Number(k) + Number(m) + Number(o);
let t2 = Number(l) + Number(n) + Number(p);
let P1 = (t1 * 100) / d;
document.getElementById("Var16").value = t1 + "(" + Math.round(P1) + "%)"; //TOTAL WEIGHT RECOVERY
document.getElementById("Var17").value = t2; //TOTAL AMOUNT RECOVERY
// NET LOST
let r = i-t1;
let s = (i*a)-t2;
let t3 = (t2/t1)*r;
document.getElementById("Var18").value=r + "Kg, (" + Math.round((r * 100)/d) + " %)" + Math.round(t3) + "/= "; // Net Lost Weight
document.getElementById("Var19").value= Math.round(s-t3)+ "/= Value difference after Recovery"  ;// Net Lost Amount
document.getElementById("Var20").value= "Total Value Lost =" + Math.round(s) + "/= ";// Net Lost Per Ton

//CHEMICAL USE
let u = document.getElementById("Var21").value; //chemical consume Per Ton
let v = (d*u);
document.getElementById("Var22").value = Math.round(u) + "Per ton, " + v/1000 + "/= Amount"; //chemical amount
let w = v/f;
document.getElementById("Var23").value= Math.round(w) + "/= Per ton on Received Oil";//per ton as per oil received

//UTILITY
let x = document.getElementById("Var24").value; //Per ton Utility
t4 = x*d;
document.getElementById("Var25").value = Math.round(t4/1000) + "/= Amount On Consumed Weight";//Amount utility as Consumed Weight
t5 = t4/f;
document.getElementById("Var26").value = Math.round(t5) + "/= Per Ton on Oil Received"//Per Ton utility as Received Weight

//TOTAL
document.getElementById("Var27").value = Math.round((s / f)*1000) +" = Net Lost" ;//Net Lost Per Ton
document.getElementById("Var28").value = Math.round(w) + " = Chemicals ";//Chemicals
document.getElementById("Var29").value = Math.round(t5) + " = Utility  ";//Chemicals
t6 = (((s / f)*1000) + w + t5);
document.getElementById("Var30").value =Math.round(t6/1000) + " Kg = TOTAL EXPENSES  ";//
document.getElementById("Var31").value = a + " = Crude Oil Price";//Chemicals

document.getElementById("Var32").value = Math.round(t6/1000) + Number(a) + " = Net Price ";//ChemicalsNet Price


}

