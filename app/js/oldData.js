function gettingOldData() {
    console.log("gettingOldData running");
    fetch('https://api.exchangeratesapi.io/2010-01-12')
        .then(rates = (response) => response.json())
        .then(rates => {
            var data = JSON.parse(JSON.stringify(rates.rates));
            var values = Object.values(data);
            console.log("data:");
            console.log(data);
            for (i = 0; i < values.length; i++) {
                var sel1 = document.getElementById("exchange1");
                var options = sel1.getElementsByTagName("option");
                options[i].setAttribute("value2", values[i]);
                var sel2 = document.getElementById("exchange2");
                var options2 = sel2.getElementsByTagName("option");
                options2[i].setAttribute("value2", values[i]);
            }
        })
}

setTimeout(() => {
    gettingOldData();
    console.log("old data refreshed from: https://api.exchangeratesapi.io/2010-01-12")
}, 2000);