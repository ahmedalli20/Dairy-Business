
function totalProduction() {
    var shed1 = parseInt(document.getElementById("input1").value);
    var shed2 = parseInt(document.getElementById("input2").value);
    var shed3 = parseInt(document.getElementById("input3").value);
    var shed4 = parseInt(document.getElementById("input4").value);
    var total = shed1 + shed2 + shed3 + shed4;
    let str = "<h4> Summary of production per day</h4> <br>";
    str += "your production in shed A is " + shed1 + " litres per day <br>";
    str += "your production in shed B is " + shed2 + " litres per day <br>";
    str += "your production in shed C is " + shed3 + " litres per day <br>";
    str += "your production in shed D is " + shed4 + " litres per day <br>";
    str += "your total production is " + total + " litres per day";

    document.getElementById("display").innerHTML = str;
}



function calculateIncome() {
    var shed1 = parseInt(document.getElementById("input1").value);
    var shed2 = parseInt(document.getElementById("input2").value);
    var shed3 = parseInt(document.getElementById("input3").value);
    var shed4 = parseInt(document.getElementById("input4").value);

    let price = parseInt(document.getElementById("input5").value);
    var total = shed1 + shed2 + shed3 + shed4;

    var selectedOption = document.getElementsByName('choice')
    if (document.getElementById("weekly").checked) {

        let income = 7 * price * total;
        let str = "your weekly income will be ksh " + income;

        document.getElementById("display").innerHTML = str;

    }

    else {
        let income = 365 * price * total;
        let str = "your yearly income will be ksh " + income;


        document.getElementById("display").innerHTML = str;
    }

}

function incomeLeapYear() {
    var shed1 = parseInt(document.getElementById("input1").value);
    var shed2 = parseInt(document.getElementById("input2").value);
    var shed3 = parseInt(document.getElementById("input3").value);
    var shed4 = parseInt(document.getElementById("input4").value);

    let price = parseInt(document.getElementById("input5").value);
    var total = shed1 + shed2 + shed3 + shed4;

    let str = "<h4>Income of each Month in a Leap Year</h4> <br>";
    const leapYear = { January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31 };
    for(const key in leapYear){
        let incomeYear = price * total * leapYear[key];

        str += `Your income for ${key} is  ksh ${incomeYear} <br>`;

    }
    document.getElementById("display").innerHTML = str;

}


