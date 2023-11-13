let c = document.getElementById("Celsius");
let f = document.getElementById("Fahrenheit");
let k = document.getElementById("Kelvin");

 c.addEventListener("input",function(){
    f.value=parseFloat((c.value)*9/5)+32;
    k.value=parseFloat(c.value)+273.15;
 })
 f.addEventListener("input",function(){
    c.value=parseFloat((f.value-32)*5/9);
    k.value=parseFloat((f.value-32)*5/9+273.15);
 })
 k.addEventListener("input",function(){
    f.value=parseFloat((k.value-273.15)*9/5)+32;
    c.value=parseFloat(k.value)-273.15;
 })

function agian() {
c.value = "";
f.value = "";
k.value = "";
}