

const btn = document.getElementById("calc");
let monthly = document.getElementById("mthly")

btn.addEventListener('click', (e) => {

    e.preventDefault();

    const amtval = parseFloat(document.getElementById("amt").value); //Select Amount, get value inside it.
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12; //Select the rate, get the value inside it, divide it by 100, divide it by 12.
    const lt = parseInt(document.getElementById("lt").value) * 12; //Select the loan term, get the value inside it, multiply by 12.

    if(isNaN(amtval) || isNaN(rate) || isNaN(lt)){

        alert("Please fill all fields correctly.");
        return;

    }else{

        let eq = amtval * (rate * Math.pow((1 + rate), lt)) / (Math.pow((1 + rate), lt) - 1);

        monthly.textContent = "$" + eq.toFixed(2);
    }
    


});

