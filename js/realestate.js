//make the calculator visible
function showdiv() {
    document.getElementById("form").setAttribute("class", "visible");
    console.log(document.getElementById("form").getAttribute("class"));
};

document.getElementById("loanButton").addEventListener("click", showdiv);



//calculate the intrest rate when the button is pressed
function calculateIntrest() {
    try {
        var loanAmount = document.getElementById("loanAmount").value;
        loanAmount = parseInt(loanAmount);

        var intrestRate = document.getElementById("intrestRate").value;
        intrestRate = parseFloat(intrestRate);

        var loanTerm = document.getElementById("loanTerm").value;
        loanTerm = parseInt(loanTerm);
        console.log(loanTerm);
        var startyear = document.getElementById("Year").value;
        startyear = parseInt(startyear);
    } catch (error) {
        console.log(error)
        return;
    }
    var Balance = loanAmount;
    var writetable = "";
    writetable += "<table>";
    writetable += "<tr> <td> Date </td>  <td> Intrest </td> <td> Principle </td> <td> Balance </td></tr>";
    for (var i = 1; i <= loanTerm; i++) {
        var intrest = 0;
        var Principle = 0;
        for (var p = 1; p <= 12; p++) {
            var Monthlyinterestrate = intrestRate / 12;
            Balance += Balance* Monthlyinterestrate;
            var MonthlyPayment = loanAmount * (Monthlyinterestrate / (1 - Math.pow((1 + Monthlyinterestrate), (-12))));
            Balance -= MonthlyPayment;
            var InterestPaidPerMonth = Balance * Monthlyinterestrate;
            intrest += InterestPaidPerMonth;
            var PrincipalPaidPerMonth = MonthlyPayment - InterestPaidPerMonth;
            Principle += PrincipalPaidPerMonth;
        };
        writetable += "<tr>";
        writetable += "<td>" + (startyear+i - 1) + "</td>";
        writetable+= "<td>" + intrest + "</td>";
        writetable += "<td>" + Principle + "</td>";
        writetable += "<td>" + Balance + "</td>";
        writetable += "</tr>";
    };
    writetable += "</table>";
    document.getElementById("table").innerHTML = writetable;

    document.getElementById("table").setAttribute("class", "visible");
    document.getElementById("form").setAttribute("class", "invisible");

};



document.getElementById("calculate").addEventListener("click", calculateIntrest);