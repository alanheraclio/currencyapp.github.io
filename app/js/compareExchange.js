console.log("compareExchange running");

function compareExecution1() {
    var sel1 = document.getElementById("exchange1");
    var exchange1 = sel1.options[sel1.selectedIndex].getAttribute('value');
    var exchange1Old = sel1.options[sel1.selectedIndex].getAttribute('value2');
    if (exchange1 == exchange1Old) {
        document.getElementsByTagName("span")[0].innerHTML = "stagnating";
        document.getElementsByTagName("span")[0].style.color = "#FFAB00";
    } else if (exchange1 > exchange1Old) {
        document.getElementsByTagName("span")[0].innerHTML = "growing";
        document.getElementsByTagName("span")[0].style.color = "#00E676";
    } else {
        document.getElementsByTagName("span")[0].innerHTML = "declining";
        document.getElementsByTagName("span")[0].style.color = "#D50000";
    }
}

function compareExecution2() {
    var sel2 = document.getElementById("exchange2");
    var exchange2 = sel2.options[sel2.selectedIndex].getAttribute('value');
    var exchange2Old = sel2.options[sel2.selectedIndex].getAttribute('value2');
    if (exchange2 == exchange2Old) {
        document.getElementsByTagName("span")[1].innerHTML = "stagnating";
        document.getElementsByTagName("span")[1].style.color = "#FFAB00";
    } else if (exchange2 > exchange2Old) {
        document.getElementsByTagName("span")[1].innerHTML = "growing";
        document.getElementsByTagName("span")[1].style.color = "#00E676";
    } else {
        document.getElementsByTagName("span")[1].innerHTML = "declining";
        document.getElementsByTagName("span")[1].style.color = "#D50000";
    }
}

document.getElementById("exchange1").addEventListener("change", function() {
    compareExecution1();
});

document.getElementById("exchange2").addEventListener("change", function() {
    compareExecution2();
});