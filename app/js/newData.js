function gettingCurrentData() {
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

gettingCurrentData();