function exchangeExecution() {
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
}

document.getElementById("one").addEventListener("keyup", function() {
    exchangeExecution();
});

document.getElementById("one").addEventListener("click", function() {
    exchangeExecution();
});

document.getElementById("exchange1").addEventListener("change", function() {
    exchangeExecution();
});

document.getElementById("exchange2").addEventListener("change", function() {
    exchangeExecution();
});