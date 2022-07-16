
function totalProduction() {
    var shed1 = parseInt(document.getElementById("input1").value);
    var shed2 = parseInt(document.getElementById("input2").value);
    var shed3 = parseInt(document.getElementById("input3").value);
    var shed4 = parseInt(document.getElementById("input4").value);
    var total = shed1 + shed2 + shed3 + shed4 ;
    let str = "your production in shed A is " + " " +shed1 +" "+ "litres per day <br>";
    str += "your production in shed B is " + " " +shed2 +" "+ "litres per day <br>";
    str += "your production in shed C is " + " " +shed3 +" "+ "litres per day <br>";
    str += "your production in shed D is " + " " +shed4 +" "+ "litres per day <br>";
    str += "your total production is "+" " +total +" " +"litres per day";

    document.getElementById("display").innerHTML = str;
}

  
 


