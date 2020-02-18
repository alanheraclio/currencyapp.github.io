function gettingData() {
    console.log("index.js running");
    fetch('https://api.exchangeratesapi.io/latest')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
}

gettingData();