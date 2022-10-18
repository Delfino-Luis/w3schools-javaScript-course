let num = 0, count = 0;
do{
    num = parseFloat(prompt("Introduza um numero: "));
    if(isNaN(num)){
        alert("Is not a Number");
        num = 0;
        continue;
    }
    count += num;
}while(num >= 0);

document.querySelector("#result").innerHTML = "The result is " + count;