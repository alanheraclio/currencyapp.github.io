function gettingData() {
    console.log("gettingData running");
    fetch('https://api.exchangeratesapi.io/latest')
        .then(rates = (response) => response.json())
        .then(rates => {
            var data = JSON.parse(JSON.stringify(rates.rates));
            var values = Object.values(data);
            console.log("data:");
            console.log(data);
            for (i = 0; i < values.length; i++) {
                var coin = Object.getOwnPropertyNames(data)[i];
                var option = document.createElement("option");
                option.setAttribute("value", values[i]);
                option.innerHTML = coin;
                var option2 = option.cloneNode(true);
                document.getElementsByClassName("coin")[0].appendChild(option);
                document.getElementsByClassName("coin")[1].appendChild(option2);
            }
        })
}

gettingData();

function exchangeExecution() {

}

document.getElementById("one").addEventListener("keyup", function() {
    var sel1 = document.getElementById("exchange1");
    var exchange1 = sel1.options[sel1.selectedIndex];
    exchange1 = exchange1.value;
    var sel2 = document.getElementById("exchange2");
    var exchange2 = sel2.options[sel2.selectedIndex];
    exchange2 = exchange2.value;
    console.log(exchange1);
    console.log(exchange2);
    var quantity = document.getElementById("one").value;
    var result = (parseFloat(quantity) / parseFloat(exchange1)) * parseFloat(exchange2);
    document.getElementById("two").value = result;
});