function refreshCurrentData() {
    console.log("refreshNewData running");
    fetch('https://api.exchangeratesapi.io/latest')
        .then(rates = (response) => response.json())
        .then(rates => {
            var data = JSON.parse(JSON.stringify(rates.rates));
            var values = Object.values(data);
            console.log("data:");
            console.log(data);
            for (i = 0; i < values.length - 1; i++) {
                var sel1 = document.getElementById("exchange1");
                var options = sel1.getElementsByTagName("option");
                options[i + 1].setAttribute("value", values[i]);
                var sel2 = document.getElementById("exchange2");
                var options2 = sel2.getElementsByTagName("option");
                options2[i + 1].setAttribute("value", values[i]);
            }
        })
}


setInterval(() => {
    refreshCurrentData();
    console.log("data refreshed from: https://api.exchangeratesapi.io/latest")
}, 60000);