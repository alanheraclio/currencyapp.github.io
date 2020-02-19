console.log("compareExchange running");

function compareExecution1() {
    var sel1 = document.getElementById("exchange1");
    var exchange1 = sel1.options[sel1.selectedIndex].getAttribute('value');
    var exchange1Old = sel1.options[sel1.selectedIndex].getAttribute('value2');
    if (exchange1 == exchange1Old) {
        document.getElementsByTagName("span")[0].innerHTML = "stagnating";
    } else if (exchange1 > exchange1Old) {
        document.getElementsByTagName("span")[0].innerHTML = "growing";
    } else {
        document.getElementsByTagName("span")[0].innerHTML = "declining";
    }
}

function compareExecution2() {
    var sel2 = document.getElementById("exchange2");
    var exchange2 = sel2.options[sel2.selectedIndex].getAttribute('value');
    var exchange2Old = sel2.options[sel2.selectedIndex].getAttribute('value2');
    if (exchange2 == exchange2Old) {
        document.getElementsByTagName("span")[1].innerHTML = "stagnating";
    } else if (exchange2 > exchange2Old) {
        document.getElementsByTagName("span")[1].innerHTML = "growing";
    } else {
        document.getElementsByTagName("span")[1].innerHTML = "declining";
    }
}

document.getElementById("exchange1").addEventListener("change", function() {
    compareExecution1();
});

document.getElementById("exchange2").addEventListener("change", function() {
    compareExecution2();
});